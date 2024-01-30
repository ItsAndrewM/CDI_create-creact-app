import { useRef, useState } from "react";
import styled from "styled-components";
import OnSubmitModal from "./OnSubmitModal";

const ContactForm = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const handleClose = (e) => {
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = e.target.checkValidity();
    const form = e.target;
    const formData = new FormData(e.currentTarget);
    const validationMessages = Array.from(formData.keys()).reduce(
      (acc, key) => {
        acc[key] = form.elements[key].validationMessage;
        return acc;
      },
      {}
    );
    if (isValid) {
      // here you do what you need to do if is valid
      const data = Array.from(formData.keys()).reduce((acc, key) => {
        acc[key] = formData.get(key);
        return acc;
      }, {});
      console.log(data);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_URL}/contact-us`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if (!response.ok) {
          throw new Error(`Invalid response: ${response.status}`);
        }
        alert("Thanks for contacting us, we will get back to you soon!");
      } catch (err) {
        console.error(err);
        alert("We can't submit the form, try again later?");
      }
    } else {
      setErrors(validationMessages);
    }
  };
  return (
    <Form ref={form} onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Your full name"
        name="user_name"
        required
      ></Input>
      <Container>
        <Input
          type="email"
          placeholder="Your email"
          name="user_email"
          required
        ></Input>
        <Input type="tel" placeholder="Your phone" name="tel" required></Input>
      </Container>
      <Input
        type="text"
        placeholder="I'm inquiring about..."
        name="subject"
        required
      ></Input>
      <TextArea placeholder="your message..." required name="body"></TextArea>
      <SubmitButton>Send Message</SubmitButton>
      <OnSubmitModal
        open={open}
        handleClose={handleClose}
        text={"Your submission was successful."}
      />
    </Form>
  );
};

const SubmitButton = styled.button``;

const TextArea = styled.textarea`
  width: 100%;
  height: 50px;
  border: 1px solid black;
  padding-left: 10px;
  min-height: 150px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 60%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid black;
  padding-left: 10px;
`;

export default ContactForm;
