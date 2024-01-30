import styled from "styled-components";

const CheckoutAgree = ({ setAgreed }) => {
  const handleChange = (e) => {
    setAgreed(e.target.checked);
  };
  return (
    <Container>
      <input type="checkbox" required onClick={handleChange} />
      <label>
        I have read and agree to the website{" "}
        <a href="/terms-conditions">terms and conditions</a>
      </label>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export default CheckoutAgree;
