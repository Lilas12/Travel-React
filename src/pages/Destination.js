import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import egypten from "../assets/images/egypten.png";
import dubai from "../assets/images/dubai.png";
import italien from "../assets/images/italien.png";
import grekland from "../assets/images/grekland.png";
import spanien from "../assets/images/spanien.png";
import turkiet from "../assets/images/turkiet.png";

const Square = styled.div`
  background-color: #ede9ed;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledTitle1 = styled.div`
  color: #1f2041;
  font-size: 20px;
  font-family: "Noto Sans Sora Sompeng";
  margin: 20px;
  margin-top: 90px;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px;
  }
`;

const StyledDescription = styled.div`
  max-width: 60%;
  padding: 40px;
  font-size: 20px;
  font-family: "Inter";
  margin: -25px auto;
  line-height: 1.6;
  word-break: break-word;
  text-align: left;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CustomersWrapper = styled.div`
  background-color: #f8f2f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  height: auto;
  width: 100%;
  margin-top: 0px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 70%;
  }
`;

const Logo = styled.img`
  /* width: 300px;
  height: 200px;
  margin-top: -10px; */
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: -10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 106%;
  }
`;

const Heading = styled.h1`
  font-size: 22px;
  color: #fff;
  font-family: "Noto Sans Sora Sompeng";
  margin-top: 30px;
  font-weight: bold;
`;

const StyledDesc = styled.p`
  max-width: 250px;
  margin: auto;
  font-size: 16px;
  height: 180px;
  padding-left: 15px;
  padding-right: 15px;
  line-height: 20px;
  margin-top: 0px;
  color: #fff;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 60px;
  background-color: #070707;
  width: 20%;
  padding: 10px;
  border-radius: 20px;
  height: auto;
  min-height: 500px;
  border: 6px solid #bb8c98;

  transition:
    color 0.3s,
    transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const MoreButton = styled(Link)`
  background-color: #bb8c98;
  color: #000;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: 700;
  font-family: "Noto Sans Sora Sompeng";
  margin-top: 20px;
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

const handleClick = () => {
  const middleOfPage = window.innerHeight / 2 + 70; //
  window.scrollTo({
    top: middleOfPage,
    behavior: "smooth",
  });
};

const Destination = () => {
  return (
    <>
      <Square>
        <StyledTitle1>
          <h1>Activities in Different Countries</h1>
        </StyledTitle1>
        <StyledDescription>
          <p>
            We also provide detailed information on what you can do in different
            countries. Whether you're interested in cultural experiences, nature
            adventures, culinary journeys, or something entirely different,
            you'll find plenty of suggestions and recommendations on our
            website.
          </p>
        </StyledDescription>
      </Square>
      <CustomersWrapper>
        <LogosContainer>
          <LogoWrapper>
            <Logo src={egypten} alt="egypten" />

            <Heading>Egypten</Heading>

            <StyledDesc>
              Egypt is one of the world's oldest civilizations and is a
              multifaceted country with a rich history and culture. Here you
              will also find the sun and warmth even during the winter months.
              Egypt is home to many of the world's historical landmarks and
              ancient sites.
              <Link to="/Egypten">Read More</Link>
            </StyledDesc>
          </LogoWrapper>

          <LogoWrapper>
            <Logo src={dubai} alt="dubai" />
            <Heading>Dubai</Heading>

            <StyledDesc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              commodi rerum iure non hic voluptate, est ut, in odio ea odit quam
              corporis architecto ipsa repudiandae? Beatae nostrum aspernatur
              laudantium.
              <Link to="/Dubai">Read More</Link>
            </StyledDesc>
          </LogoWrapper>
          <LogoWrapper>
            <Logo src={grekland} alt="grekland" />
            <Heading>Grekland</Heading>
            <StyledDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              nisi, molestias explicabo quod voluptates quas itaque dignissimos
              cum officiis saepe expedita architecto. Harum recusandae quod
              excepturi nulla maiores similique magnam!
              <Link to="/Grekland">Read More</Link>
            </StyledDesc>
          </LogoWrapper>
        </LogosContainer>

        <LogosContainer>
          <LogoWrapper>
            <Logo src={italien} alt="italien" />
            <Heading>Italien</Heading>
            <StyledDesc>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              maxime in cupiditate temporibus animi, doloribus deleniti ea quis
              laboriosam vitae, molestias enim error minima veritatis. Quisquam
              qui officiis nesciunt magni.
              <Link to="/Italien">Read More</Link>
            </StyledDesc>
          </LogoWrapper>

          <LogoWrapper>
            <Logo src={spanien} alt="spanien" />
            <Heading>Spanien</Heading>
            <StyledDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              nisi, molestias explicabo quod voluptates quas itaque dignissimos
              cum officiis saepe expedita architecto. Harum recusandae quod
              excepturi nulla maiores similique magnam!
              <Link to="/Spanien">Read More</Link>
            </StyledDesc>
          </LogoWrapper>
          <LogoWrapper>
            <Logo src={turkiet} alt="turkiet" />
            <Heading>Turkiet</Heading>

            <StyledDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              nisi, molestias explicabo quod voluptates quas itaque dignissimos
              cum officiis saepe expedita architecto. Harum recusandae quod
              excepturi nulla maiores similique magnam!
              <Link to="/Turkiet">Read More</Link>
            </StyledDesc>
          </LogoWrapper>
        </LogosContainer>
        <MoreButton onClick={handleClick} to="/">
          Hitta mer resor
        </MoreButton>
      </CustomersWrapper>
    </>
  );
};

export default Destination;
