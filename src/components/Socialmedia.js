import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const SocialMediaFooter = styled.div`
  text-align: center;
`;

const SocialIcons = styled.div`
  margin-top: 20px;
`;

const SocialLink = styled.a`
  color: #f8f2f8;
  font-size: 25px;
  margin: 0 10px;
  text-decoration: none;
  transition: color 0.8s;

  &:hover {
    color: #bb8c98;
  }
`;

function Socialmedia() {
  return (
    <SocialMediaFooter>
      <SocialIcons>
        <SocialLink href="#">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="#">
          <FaFacebook />
        </SocialLink>
        <SocialLink href="">
          <FaLinkedin />
        </SocialLink>
      </SocialIcons>
    </SocialMediaFooter>
  );
}

export default Socialmedia;
