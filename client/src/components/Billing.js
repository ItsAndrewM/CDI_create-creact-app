import styled from "styled-components";
import { shipping_billing } from "../data/shipping_billing";
import CountryDropdown from "./CountryDropdown";
import StateDropdown from "./StateDropdown";
import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Billing = ({
  orderKey,
  headerText,
  orderForm,
  setOrderForm,
  setData,
  data,
  formRef,
  setValidated,
  currency,
  amount,
  setDiffShipping,
  diffShipping,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    setOrderForm({
      ...orderForm,
      [e.target.name]: e.target.value,
    });
    setData({ ...data, [orderKey]: orderForm });
  };

  useEffect(() => {
    // setValidated(false);
  }, [orderForm]);

  return (
    <Form
      ref={formRef}
      onChange={handleFormChange}
      onSubmit={handleSubmit((formData) => {
        if (formData) {
          setValidated(true);
          setOrderForm(formData);
          setData({ ...data, [orderKey]: formData });
          navigate("/checkout/payment", {
            state: {
              orderData: data,
              currency: currency,
              amount: amount,
              billing: formData,
            },
          });
        } else {
          setValidated(false);
        }
      })}
      id={orderKey}
    >
      <h2>{headerText}</h2>
      {shipping_billing &&
        shipping_billing.map((val, index) => {
          if (val.field === "input") {
            if (val.required === true) {
              return (
                <Fragment key={index}>
                  <Label>{val.label}</Label>
                  <input
                    {...register(val.name, {
                      required: true,
                      pattern: val.pattern,
                      minLength: val.minLength,
                      maxLength: val.maxLength,
                    })}
                    type={val.type}
                    placeholder={val.placeholder}
                    required={true}
                  />
                  {errors[val.name] && errors[val.name].message}
                </Fragment>
              );
            } else {
              return (
                <Fragment key={index}>
                  <Label>{val.label}</Label>
                  <Input
                    placeholder={val.placeholder}
                    {...register(val.name, {
                      pattern: val.pattern,
                      minLength: val.minLength,
                      maxLength: val.maxLength,
                    })}
                    type={val.type}
                  />
                </Fragment>
              );
            }
          } else if (val.name === "country") {
            return (
              <Fragment key={index}>
                <CountryDropdown
                  val={val}
                  name={val.name}
                  register={register}
                />
              </Fragment>
            );
          } else if (val.name === "state") {
            return (
              <Fragment key={index}>
                <StateDropdown
                  countryVal={orderForm}
                  val={val}
                  name={val.name}
                  register={register}
                />
              </Fragment>
            );
          }
        })}
    </Form>
  );
};

const Label = styled.label``;

const Input = styled.input``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;
export default Billing;
