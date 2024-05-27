import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import kairo from "../assets/images/kairo.png";
import nilen from "../assets/images/nilen.png";
import sfinxen from "../assets/images/sfinxen.png";
import pyramid from "../assets/images/pyramid.mp4";

const EgyptenSquare = styled.div`
  background-color: #f8f2f8;
  color: #000;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: bold;
  /* margin-top: 100px; */
  /*
  word-break: break-word; */
`;

const StyledTitle1 = styled.div`
  color: #1f2041;
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

const TravelSection1 = styled.section`
  background-color: #070707;
  display: flex;
  margin: 8px 0;
  gap: 5rem;
  margin-top: -20px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  padding: 2rem;

  @media screen and (min-width: 270px) and (max-width: 1070px) {
    flex-direction: column;
    margin: 5rem 1rem;
    gap: 2rem;
    margin-top: -20px;
  }
`;

const TravelSection2 = styled.section`
  background-color: #ede9ed;
  display: flex;
  margin: 8px 0;
  gap: 5rem;
  margin-top: -10px;
  margin-bottom: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  padding: 2rem;

  @media screen and (min-width: 270px) and (max-width: 1070px) {
    flex-direction: column;
    margin: 5rem 1rem;
    gap: 2rem;
  }
`;

const TravelSection3 = styled.section`
  background-color: #ede9ed;
  display: flex;
  margin: 8px 0;
  gap: 5rem;
  margin-top: -10px;
  margin-bottom: 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  padding: 2rem;

  @media screen and (min-width: 270px) and (max-width: 1070px) {
    flex-direction: column;
    margin: 5rem 1rem;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  img {
    height: 30rem;

    @media screen and (min-width: 270px) and (max-width: 1070px) {
      max-inline-size: 100%;
      block-size: auto;
    }
  }
`;

const ImageContainer2 = styled.div`
  img {
    height: 28rem;
    margin-top: 90px;

    @media screen and (min-width: 270px) and (max-width: 1070px) {
      max-inline-size: 100%;
      block-size: auto;
    }
  }
`;

const ImageContainer3 = styled.div`
  img {
    height: 30rem;

    @media screen and (min-width: 270px) and (max-width: 1070px) {
      max-inline-size: 100%;
      block-size: auto;
    }
  }
`;

const Content1 = styled.div`
  .title1 {
    margin: 2px;
    color: #fff;

    h1 {
      font-size: 40px;
      text-align: center;
      font-family: "Noto Sans Sora Sompeng";

      @media screen and (min-width: 270px) and (max-width: 1070px) {
        font-size: 2rem;
        text-align: center;
      }
    }
  }
`;

const Content2 = styled.div`
  .title2 {
    margin: 2px;
    color: #1f2041;

    h1 {
      font-size: 40px;
      text-align: center;
      font-family: "Noto Sans Sora Sompeng";

      @media screen and (min-width: 270px) and (max-width: 1070px) {
        font-size: 2rem;
        text-align: center;
      }
    }
  }
`;

const Content3 = styled.div`
  .title3 {
    margin: 2px;
    color: #1f2041;

    h1 {
      font-size: 40px;
      text-align: center;
      font-family: "Noto Sans Sora Sompeng";

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
  gap: 4rem;
  margin: 4rem 0;

  @media screen and (min-width: 270px) and (max-width: 1070px) {
    gap: 1rem;
    margin: 2rem 0;
  }
`;

const Text1 = styled.div`
  h3 {
    font-size: 1.5rem;
    color: #fff;
    font-family: "Inter";

    @media screen and (min-width: 270px) and (max-width: 1070px) {
      font-size: 1rem;
    }
  }
`;

const Text2 = styled.div`
  h3 {
    font-size: 1.4rem;
    font-family: "Inter";

    @media screen and (min-width: 270px) and (max-width: 1070px) {
      font-size: 1.4rem;
    }
  }
`;

const Text3 = styled.div`
  h3 {
    font-size: 1.5rem;
    color: #000;
    font-family: "Inter";

    @media screen and (min-width: 270px) and (max-width: 1070px) {
      font-size: 1rem;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 60%;
  overflow: hidden;
  margin-top: -10px;
`;

const StyledVideo = styled.video`
  /* width: 100%;
  height: auto;

  margin-top: -10px; */

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Egypten = () => {
  const data1 = [
    {
      description:
        "Cairo is the capital of Egypt and the largest city in Africa. People have lived here for over 6000 years, and the city has hosted many civilizations. Key attractions include the Egyptian Museum, Memphis, the Islamic Museum, and all the bazaars.",
    },
  ];
  const data2 = [
    {
      description:
        "The Nile is a river in eastern Africa. It is approximately 6,670 kilometers long, and its source, Lake Victoria, is located about 1,134 meters above sea level. The drainage basin covers an area of ​​approximately 3,250,000 square kilometers, which is equivalent to about 10 percent of Africa's surface area.",
    },
  ];

  const data3 = [
    {
      description:
        "A sphinx was originally a depiction of the pharaoh in the form of a reclining lion. Starting from the Fourth Dynasty, a human head was used instead of the lion's head. From that time comes the Great Sphinx of Giza, which is an image of Pharaoh Khafre near his pyramid.",
    },
  ];
  return (
    <>
      <Container>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted>
            <source src={pyramid} type="video/mp4" />
          </StyledVideo>
        </VideoWrapper>
      </Container>

      <EgyptenSquare>
        <StyledTitle1>
          <h1>Egypt, the world's best country</h1>
        </StyledTitle1>
        <StyledDescription>
          <p>
            Visit the Pyramids of Giza, take a cruise on the Nile, or head to
            Cairo and admire the Sphinx. Discover world-class snorkeling and
            diving; the Red Sea is one of the warmest seas in the world and
            offers a stunning underwater landscape. Living in Egypt is still
            relatively inexpensive. The beaches are long with fine to coarse
            sand.
          </p>
        </StyledDescription>
      </EgyptenSquare>

      <TravelSection1 id="offer">
        <ImageContainer>
          <img src={kairo} alt="kairo" />
        </ImageContainer>
        <Content1>
          <div className="title1">
            <h1>Kairo</h1>
          </div>
          <List className="list">
            {data1.map(({ description }) => (
              <ListItem key={description}>
                <Text1>
                  <h3>{description}</h3>
                </Text1>
              </ListItem>
            ))}
          </List>
        </Content1>
      </TravelSection1>

      <TravelSection2 id="offer">
        <Content2>
          <div className="title2">
            <h1>Nilen</h1>
          </div>
          <List className="list">
            {data2.map(({ description }) => (
              <ListItem key={description}>
                <Text2>
                  <h3>{description}</h3>
                </Text2>
              </ListItem>
            ))}
          </List>
        </Content2>
        <ImageContainer2>
          <img src={nilen} alt="nilen" />
        </ImageContainer2>
      </TravelSection2>

      <TravelSection3 id="offer">
        <ImageContainer3>
          <img src={sfinxen} alt="sfinxen" />
        </ImageContainer3>
        <Content3>
          <div className="title3">
            <h1>Sfinxen</h1>
          </div>
          <List className="list">
            {data3.map(({ description }) => (
              <ListItem key={description}>
                <Text3>
                  <h3>{description}</h3>
                </Text3>
              </ListItem>
            ))}
          </List>
        </Content3>
      </TravelSection3>
    </>
  );
};

export default Egypten;
