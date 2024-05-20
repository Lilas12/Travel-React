import React from "react";
import styled from "styled-components";
import Socialmedia from "./Socialmedia";

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  justify-content: center;
  align-items: start;
  height: 420px;
  background-color: #070707;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
    padding: 20px;
  }
`;

const FooterContent = styled.div`
  margin-top: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterHeading = styled.h1`
  font-size: 36px;
  font-family: "Noto Sans Sora Sompeng";
  color: #f8f2f8;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const FooterLink = styled.a`
  font-family: "Inter";
  font-size: 25px;
  text-decoration: none;
  transition: transform 0.4s ease-in-out;
  color: #f8f2f8;

  &:hover {
    color: #bb8c98;
    transform: scale(1.25);
  }
`;

const FooterDescription = styled.p`
  font-family: "Inter";
  font-size: 20px;
  color: #f8f2f8;
`;

const ContentP = styled.div`
  color: #f8f2f8;
  font-size: 20px;
  padding: 140px 20px 5px;
  text-align: end;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div className="content-section">
          <FooterHeading>Here we are</FooterHeading>
        </div>
        <div className="content-section">
          <FooterDescription>
            <span className="city">Hisingen</span>
          </FooterDescription>
          <FooterDescription>
            <span className="city">Gothenburg</span>
          </FooterDescription>
        </div>
      </FooterContent>
      <FooterContent>
        <div className="content-section">
          <FooterHeading>Contact Us</FooterHeading>
        </div>
        <div className="content-section">
          <FooterDescription>
            <FooterLink href="mailto:lelas.alneser@gmail.com">
              lelas.alneser@gmail
            </FooterLink>
          </FooterDescription>
          <FooterDescription>Tel:073-9999999</FooterDescription>
        </div>
      </FooterContent>
      <FooterContent>
        <FooterHeading>Socialamedia</FooterHeading>
        <Socialmedia />
        <ContentP>
          <FooterDescription>©2024 av Lilas</FooterDescription>
        </ContentP>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
