const CurrencyOption = ({ cur }) => {
  return (
    <option value={cur.rate}>
      {cur.name} - {cur.currencyCode}
    </option>
  );
};

export default CurrencyOption;
