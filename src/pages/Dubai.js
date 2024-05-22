import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import dubai from "../assets/images/dubaihero.png";

import { DubaiData } from "../Data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 100px;
`;
const HeroImage = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
const StyledLanding = styled.img`
  width: 100%;
  /* height: 500px; */
`;

const DubaiSquare = styled.div`
  background-color: #070707;
  color: #fff;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: bold;
  margin-top: -40px;
  /*
  word-break: break-word; */
`;

const StyledTitle1 = styled.h1`
  color: #fff;
  font-size: 20px;
  font-family: "Noto Sans Sora Sompeng";
  margin: 20px;
  /* word-break: break-word; */
  margin-top: 90px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px;
  }
`;

const StyledDescription = styled.div`
  max-width: 60%;
  padding: 20px;
  font-size: 20px;
  font-family: "Inter";
  margin: -25px auto;
  line-height: 1.2;
  word-break: break-word;
  text-align: left;
  margin-bottom: 20px;
`;

const Container2 = styled.div`
  background-color: #f8f2f8;
  margin-top: -50px;
`;

const SlideContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
  /* margin-bottom: 100px; */

  .slick-slide > div {
    margin: 0 10px;
  }

  .slick-list {
    margin: 0 -10px;
  }

  .slick-dots li button:before {
    color: black !important;
    font-size: 18px !important;
  }

  .slick-prev:before,
  .slick-next:before {
    color: black;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    .slick-dots li button:before {
      color: black !important;
      font-size: 11px !important;
    }
    .slick-prev:before,
    .slick-next:before {
      color: black;
      font-size: 18px;
    }
  }
`;

const HeroText = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-family: "Noto Sans Sora Sompeng";
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Card = styled.div`
  border: 1px solid #020000;
  border-radius: 40px;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow: hidden;
  height: 500px;
  cursor: pointer;
  display: flex;

  @media (max-width: 768px) {
    height: 600px;
  }
`;

const CardTop = styled.div`
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  h1 {
    font-size: 22px;
    margin: 20px;
    font-weight: bold;
    color: #1f2041;
    text-align: center;
    font-family: "Noto Sans Sora Sompeng";
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  p {
    font-size: 15px;
    margin: 20px;
    font-weight: bold;
    color: #1f2041;
    text-align: left;
    font-family: "Inter";
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

// Referanse kod from: https://react-slick.neostack.com/docs/get-started and https://www.npmjs.com/package/react-slick
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", fontSize: "14px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", fontSize: "18px" }}
      onClick={onClick}
    />
  );
}
const Dubai = () => {
  // Referanse kod from: https://react-slick.neostack.com/docs/get-started and https://www.npmjs.com/package/react-slick
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <HeroImage>
          <StyledLanding src={dubai} alt="Background" />
        </HeroImage>
        <DubaiSquare>
          <StyledTitle1>
            <h1>Dubai 🇦🇪</h1>
          </StyledTitle1>
          <StyledDescription>
            <p>
              In recent years, new and popular areas have emerged near Dubai or
              Jumeirah Beach. Along the main road, Sheikh Zayed Road, Downtown
              Dubai has been built from scratch. Here you will find, among other
              things, Burj Khalifa, Dubai Mall, and numerous new luxury hotels.
            </p>
          </StyledDescription>
        </DubaiSquare>
      </Container>
      <Container2>
        <SlideContainer>
          <HeroText>Finding different activities in dubai</HeroText>
          <Slider {...settings}>
            {DubaiData.map((item) => (
              <Card key={item.id}>
                <CardTop>
                  <img src={item.img} alt={item.title} />

                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </CardTop>
              </Card>
            ))}
          </Slider>
        </SlideContainer>
      </Container2>
    </>
  );
};

export default Dubai;
