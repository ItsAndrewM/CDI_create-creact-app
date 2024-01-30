const DisplayShortAddress = ({ displayAddress }) => {
  return (
    <p>
      Shipping to:{" "}
      <strong>
        {displayAddress.address_1}, {displayAddress.address_2},{" "}
        {displayAddress.city}, {displayAddress.state}, {displayAddress.country}
      </strong>
    </p>
  );
};

export default DisplayShortAddress;
