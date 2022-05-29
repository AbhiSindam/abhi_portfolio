import React from "react";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";

import {
  Container,
  TextContainer,
  Label,
  Input,
  TextArea,
  FormHeading,
  Submit,
  ButtonDiv,
} from "./ContactStyles";
export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fc9vmmc",
        "template_70qsuw8",
        e.target,
        "1TLdrpB7WmeuHBDcq"
      )
      .then((res) => `return <h1> Thanks for connecting</h1>`)
      .catch(err => console.log(err))
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormHeading>Contact Form</FormHeading>
        <TextContainer>
          <Label>Name</Label>
          <Input type="text" name="name" placeholder="Name" />
        </TextContainer>
        <TextContainer>
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="Email address" />
        </TextContainer>
        <TextContainer>
          <Label>Company</Label>
          <Input type="text" name="company" placeholder="Company name" />
        </TextContainer>
        <TextContainer>
          <Label>Message</Label>
          <TextArea type="text" name="message" placeholder="Message" />
        </TextContainer>
        <ButtonDiv>
          <Submit>Submit</Submit>
        </ButtonDiv>
      </form>
    </Container>
  );
}
