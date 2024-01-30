const CartShipping = ({ currency, shipping }) => {
  return (
    <p>
      <strong>
        {currency.currencyCode} $
        {(Number(currency.rate) * Number(shipping)).toFixed(2)}
      </strong>
    </p>
  );
};

export default CartShipping;
