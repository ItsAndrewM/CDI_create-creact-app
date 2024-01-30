import styled from "styled-components";
import useFetchCoupons from "../hooks/useFetchCoupons";
import { useEffect, useState } from "react";

const Coupons = ({ setCoupons, setDiscount }) => {
  const allCoupons = useFetchCoupons();
  const [code, setCode] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setCode({
      [e.target.name]: e.target.value,
    });
    // couponCode = { couponCode: e.target.value };
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (allCoupons && code) {
      const found = allCoupons.find((coupon) => {
        if (coupon.code === code.couponInput) {
          return coupon;
        }
      });
      if (found) {
        setDiscount({
          amount: found.amount,
          discount_type: found.discount_type,
        });
        setCoupons(true);
      } else {
        window.alert("no match");
        setCoupons(false);
      }
    }
    setCoupons(code);
  };

  useEffect(() => {
    if (allCoupons) {
    }
  }, [allCoupons]);
  return (
    <Wrapper>
      <Form>
        <Input
          type="text"
          onChange={handleChange}
          placeholder="Coupon code"
          name="couponInput"
        />
        <StyledButton onClick={handleClick}>Apply Coupon</StyledButton>
      </Form>
    </Wrapper>
  );
};

const StyledButton = styled.button`
  background-color: inherit !important;
  color: var(--accent-primary-color);
  border: 2px solid var(--accent-secondary-color);
  padding: 10px 5px !important;
  min-width: 200px !important;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin: 0px 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid grey;
  padding: 10px;
`;
export default Coupons;
