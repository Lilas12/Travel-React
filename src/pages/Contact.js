import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import travelcover from "../assets/images/travelcover.jpg";
import { BsHeadphones, BsPerson } from "react-icons/bs";

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 80px;
  border-radius: 40px;
  background-color: #f8f2f8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 25px;
  font-family: "Noto Sans Sora Sompeng";
  text-align: center;
  font-weight: bold;
`;

const Input = styled.input`
  width: 90%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  border: 4px solid #bb8c98;
`;

const Container = styled.div`
  position: relative;
  background-image: url(${travelcover});
  background-position: center;
  background-attachment: fixed;
  height: 90vh;
  margin-top: 100px;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ImageText = styled.div`
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 30px;
  line-height: 40px;
  max-width: 80%;
  margin: 0 auto;
  font-weight: bolder;
`;

const Styledrubrik = styled.div`
  font-size: 25px;
  text-align: center;
  padding: -4px;
  font-family: "Noto Sans Sora Sompeng";
  color: #1f2041;
`;

const StyledDes = styled.p`
  font-size: 25px;
  text-align: center;
  padding: -2px;
  margin-top: 1%;
  padding: -2px;
  font-family: "Inter";
  color: #000;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const StyledTextArea = styled.textarea`
  border: 4px solid #bb8c98;
  width: 90%;
  padding: 12px;
  font-size: 16px;
  border-radius: 4px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Button = styled.button`
  background-color: #bb8c98;
  color: #000;
  padding: 10px 50px;
  text-decoration: none;
  font-weight: 700;
  font-family: "Noto Sans Sora Sompeng";
  margin-bottom: 30px;
  border: 4px solid #bb8c98;
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

const TravelSection = styled.section`
  background-color: #ede9ed;
  display: flex;
  margin: 8px 0;
  gap: 5rem;
  margin-bottom: -10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 1rem;

  @media screen and (min-width: 270px) and (max-width: 1070px) {
    flex-direction: column;
    margin: 5rem 1rem;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  img {
    height: 39rem;

    @media screen and (min-width: 270px) and (max-width: 1070px) {
      max-inline-size: 100%;
      block-size: auto;
    }
  }
`;

const Content = styled.div`
  .title {
    margin: 2px;

    h1 {
      font-size: 40px;

      @media screen and (min-width: 270px) and (max-width: 1070px) {
        font-size: 2rem;
        text-align: center;
      }
    }
  }
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 4rem 0;

  @media screen and (min-width: 270px) and (max-width: 1070px) {
    gap: 1rem;
    margin: 2rem 0;
  }
`;

const Icon = styled.div`
  padding: 8px;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  &.pink {
    background-color: #bb8c98;
    color: #000;
  }

  &.rosa {
    background-color: #bb8c98;
    color: #fff;
  }
`;

const Text = styled.div`
  h3 {
    font-size: 1.5rem;

    @media screen and (min-width: 270px) and (max-width: 1070px) {
      font-size: 1.5rem;
    }
  }
`;

const StyledMap = styled.iframe`
  width: auto;
  min-width: 600px;
  height: 500px;
  border: 0;

  @media screen and (min-width: 270px) and (max-width: 1070px) {
    min-width: 400px;
  }
`;

function Contact() {
  const data = [
    {
      description: "Best Travel Guide for your Services",
      icon: <BsPerson />,
      color: "pink",
    },
    {
      description: "24/7 Customer Support",
      icon: <BsHeadphones />,
      color: "rosa",
    },
  ];

  const Format = {
    username: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(Format);
  const [error, setError] = useState({});
  const [btnSubmit, setBtnSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validation(formValues);
    setError(formErrors);
    setBtnSubmit(true);

    if (Object.keys(formErrors).length === 0) {
      const serviceID = "service_9bs5ffm";
      const templateID = "template_lbebtqc";
      const userID = "dM70lb3dxTelZhfez";

      const templateParams = {
        username: formValues.username,
        email: formValues.email,
        message: formValues.message,
      };

      axios
        .post("https://api.emailjs.com/api/v1.0/email/send", {
          service_id: serviceID,
          template_id: templateID,
          user_id: userID,
          template_params: templateParams,
        })
        .then((response) => {
          console.log("Email sent successfully!", response.data);
          setFormValues(Format);
        })
        .catch((error) => {
          console.error("Email could not be sent.", error);
        });
    }
  };

  const validation = (values) => {
    const formErrors = {};

    if (!values.username) {
      formErrors.username = "Please fill this field";
    }

    if (!values.email) {
      formErrors.email = "Please fill this field";
    }

    if (!values.message) {
      formErrors.message = "Please fill this field";
    }

    return formErrors;
  };

  return (
    <>
      <Container>
        <ImageOverlay>
          <ImageText>
            <p>
              "If you have any questions about your trip, please feel free to
              contact us."
            </p>
          </ImageText>
        </ImageOverlay>
      </Container>
      <FormContainer>
        <Styledrubrik>
          <h1>Contact Us</h1>
        </Styledrubrik>
        <form onSubmit={handleSubmit}>
          <FormLabel type="name">Name</FormLabel>
          <Input
            required
            type="text"
            name="username"
            placeholder="Name"
            value={formValues.username}
            onChange={handleChange}
          />
          <FormLabel type="email">Email</FormLabel>
          <Input
            required
            type="email"
            name="email"
            placeholder="Ex@example.com"
            value={formValues.email}
            onChange={handleChange}
          />
          <p>{error.email}</p>
          <FormLabel type="text">Ask Your Question</FormLabel>
          <StyledTextArea
            required
            type="text"
            name="message"
            placeholder="Write to us"
            value={formValues.message}
            onChange={handleChange}
          />
          <p>{error.message}</p>
          <ButtonContainer>
            <Button type="submit">Send</Button>
          </ButtonContainer>
          {Object.keys(error).length === 0 && btnSubmit ? (
            <StyledDes>
              <p>"Thank you, we will get back to you shortly."</p>
            </StyledDes>
          ) : (
            <p></p>
          )}
        </form>
      </FormContainer>

      <TravelSection>
        <ImageContainer>
          <StyledMap
            title="Karta"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4261.500157269461!2d11.942188712259416!3d57.72070287376666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff4a89bc11f1f%3A0x4cbb3b2fbfbc7f16!2zVsOlZ23DpHN0YXJlcGxhdHNlbg!5e0!3m2!1ssv!2sse!4v1716338838771!5m2!1ssv!2sse"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></StyledMap>
        </ImageContainer>
        <Content>
          <div className="title">
            <h1>We offer a wide range of travel experiences worldwide.</h1>
          </div>
          <List className="list">
            {data.map(({ description, icon, color }) => (
              <ListItem key={description}>
                <Icon className={color}>{icon}</Icon>
                <Text>
                  <h3>{description}</h3>
                </Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </TravelSection>
    </>
  );
}

export default Contact;
