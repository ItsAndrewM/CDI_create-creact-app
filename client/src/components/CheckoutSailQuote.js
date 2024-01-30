import { useState } from "react";
import { sailQuoteData } from "../data/sailQuoteData";
import styled from "styled-components";
import pslLogo from "../imgs/cropped-PS_favicon.png";
import { Fragment } from "react";

const CheckoutSailQuote = ({ setData, data }) => {
  const [sailQuote, setSailQuote] = useState(false);
  let sailObj = {};

  const handleChange = (e) => {
    const name = e.target.name;
    let val = e.target.value;

    sailObj = { ...sailObj, [e.target.name]: e.target.value };
    if (Object.keys(sailObj).length === 3) {
      const sailData = Object.keys(sailObj).map((ele) => {
        return { key: ele, value: sailObj[ele] };
      });
      setData({ ...data, meta_data: sailData });
    }
  };

  return (
    <Form onChange={handleChange}>
      <h2>Would you like to add a sail quote to your order?</h2>
      <Container>
        <Input type="checkbox" onClick={(e) => setSailQuote(!sailQuote)} />
        <Label>Would you like a sail quote?</Label>
      </Container>
      {sailQuote && sailQuoteData && (
        <>
          {sailQuoteData.map((input, index) => {
            if (input.field === "input") {
              return (
                <Fragment key={index}>
                  <Label>{input.label}</Label>
                  <Input
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.name}
                  />
                </Fragment>
              );
            } else {
              return (
                <Fragment key={index}>
                  <Label>{input.label}</Label>
                  <Select name={input.name}>
                    {input.name === "sailingType" ? (
                      <Option defaultValue="">
                        What type of sailing do you do?
                      </Option>
                    ) : (
                      <Option defaultValue="">
                        When do you need your sails by?
                      </Option>
                    )}
                    {input.options.map((option, index) => {
                      return (
                        <Option
                          key={index}
                          value={option.value}
                          name={option.name}
                        >
                          {option.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Fragment>
              );
            }
          })}
          <Container style={{ justifyContent: "center" }}>
            <H3>Sail quote powered by Precision Sails</H3>
            <ImgWrapper>
              <Img src={pslLogo} />
            </ImgWrapper>
          </Container>
        </>
      )}
    </Form>
  );
};

const H3 = styled.h3`
  text-align: center;
`;

const ImgWrapper = styled.div`
  width: 5%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Select = styled.select``;

const Option = styled.option``;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  gap: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const Input = styled.input``;

const Label = styled.label``;
export default CheckoutSailQuote;
