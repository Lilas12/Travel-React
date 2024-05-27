import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import dubai from "../assets/images/dubaih.png";
import { DubaiData } from "../Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-scroll";

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
`;

const ImageText = styled.div`
  color: #fff;
  font-size: 60px;
  font-family: "Noto Sans Sora Sompeng";
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6);
  font-weight: bold;
  margin-top: -200px;

  @media (max-width: 1024px) {
    font-size: 40px;
    padding: 10px;
    margin-top: -540px;
  }
`;

const ButtonContainer = styled.div`
  padding: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #bb8c98;
  color: #000;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: "Noto Sans Sora Sompeng";

  transition: background-color 0.4s ease;
  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    padding: 6px 12px; /*  knappen för mobilskärm*/
    font-size: 14px;
  }

  @media (min-width: 769px) {
    padding: 12px 24px; /*  knappen för storskärm */
    font-size: 18px;
  }
`;

const breakpoints = {
  mobile: "768px",
};

const media = {
  mobile: `(max-width: ${breakpoints.mobile})`,
};

const MobileImage = styled.img`
  width: 100%;
  margin-top: 200px;
  filter: brightness(0.8);
`;

const Container = styled.div`
  text-align: center;
  position: relative;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  margin-top: -100px;

  img {
    max-width: 100%;
    height: auto;
  }
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
  width: 50%;
  margin: 0 auto;
  margin-top: 50px;
  /* margin-bottom: 100px; */

  @media (max-width: 768px) {
    width: 90%;
  }

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

// const HeroText = styled.h2`
//   display: flex;
//   justify-content: center;
//   font-size: 36px;
//   font-family: "Noto Sans Sora Sompeng";
//   @media (max-width: 768px) {
//     font-size: 30px;
//   }
// `;

const Title = styled.div`
  text-align: center;
  h2 {
    font-size: 2rem;
    margin-top: 20px;
    span {
      color: var(--primary-color);
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 3rem;
    }
  }
`;

const Card = styled.div`
  border: 1px solid #020000;
  border-radius: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow: hidden;
  height: 550px;
  cursor: pointer;
  display: flex;

  @media (max-width: 768px) {
    height: 660px;
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
        <MobileImage src={dubai} alt="dubai" />
        <ImageOverlay>
          <ImageText>Find activities</ImageText>
          <ButtonContainer>
            <Button>
              <Link
                to="DubaiData"
                spy={true}
                smooth={true}
                duration={500}
                offset={200}
              >
                Find Activites
              </Link>
            </Button>
          </ButtonContainer>
        </ImageOverlay>
        <div id="DubaiData"></div>

        <style>
          {`
          @media ${media.mobile} {
            ${MobileImage} {
              display: block;
            }
          @media ${media.mobile} {
            ${Button} a {
            offset: 900;
            }
          }
        `}
        </style>
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
