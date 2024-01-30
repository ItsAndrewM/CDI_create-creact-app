import Coupons from "./Coupons";
import { useState } from "react";
import styled from "styled-components";

const OrderCoupon = ({ coupons, setCoupons }) => {
  const [haveCoupon, setHaveCoupon] = useState(false);

  return (
    <>
      <SmallContainer>
        <P>Have a coupon?</P>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setHaveCoupon(!haveCoupon);
          }}
        >
          Click here to enter your coupon code
        </Button>
      </SmallContainer>
      {haveCoupon && (
        <SmallContainer>
          <Coupons coupons={coupons} setCoupons={setCoupons} />
        </SmallContainer>
      )}
    </>
  );
};

const Button = styled.button`
  background-color: inherit !important;
  color: var(--accent-secondary-color) !important;
  padding: 5px !important;
  &:hover {
    color: var(--accent-primary-color) !important;
  }
`;

const P = styled.p``;

const SmallContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export default OrderCoupon;
