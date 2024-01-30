import styled from "styled-components";

const ProductVarSelect = ({ product, productVar, handleSelect, VarRef }) => {
  console.log(productVar);
  return (
    product &&
    product.type &&
    product.type !== "simple" &&
    (productVar && productVar[0] && productVar[0].attributes ? (
      <InputWrapper>
        <Label>{productVar[0].attributes[0].name}</Label>
        <Select onChange={handleSelect} ref={VarRef}>
          <Option defaultValue={""} value="">
            Choose an Option
          </Option>
          {productVar.map((option, index) => {
            return (
              option && (
                <Option key={index} value={option.price}>
                  {option.attributes[0].option}
                </Option>
              )
            );
          })}
        </Select>
      </InputWrapper>
    ) : (
      <InputWrapper>
        <Label></Label>
        <Select o>
          <Option defaultValue={""} value="">
            Choose an Option
          </Option>
        </Select>
      </InputWrapper>
    ))
  );
};

const Select = styled.select`
  min-width: 100px;
  text-align: center;
  min-height: 20px;
`;

const Option = styled.option``;

const Label = styled.label``;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebebeb;
  gap: 10px;
  padding: 10px;
`;
export default ProductVarSelect;
