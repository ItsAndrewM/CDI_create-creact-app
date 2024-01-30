import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

const OnSubmitModal = ({ open, handleClose, text }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 200,
    bgcolor: "white",
    boxShadow: 24,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <ButtonWrapper style={{ alignItems: "flex-end" }}>
          <CloseButton onClick={handleClose}>x</CloseButton>
        </ButtonWrapper>
        <TextWrapper>
          <P>{text}</P>
        </TextWrapper>
      </Box>
    </Modal>
  );
};

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

const P = styled.p`
  width: 100%;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 5px 5px 0 0;
`;

const CloseButton = styled.button`
  width: fit-content !important;
  height: fit-content !important;
  padding: 3px 8px 3px 8px !important;
`;
export default OnSubmitModal;
