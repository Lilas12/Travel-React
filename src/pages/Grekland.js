import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import crete from "../assets/images/crete.png";
import rhodos from "../assets/images/rhodos.png";
import santorini from "../assets/images/santorini.png";
import grece from "../assets/images/grece.mp4";

const TravelSection1 = styled.section`
  background-color: #f8f2f8;
  display: flex;
  margin: 8px 0;
  gap: 5rem;
  margin-top: -10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  padding: 2rem;

  @media screen and (min-width: 270px) and (max-width: 1070px) {
    flex-direction: column;
    margin: 5rem 1rem;
    gap: 2rem;
  }
`;

const TravelSection2 = styled.section`
  background-color: #070707;
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
  background-color: #f8f2f8;
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
    height: 28rem;

    @media screen and (min-width: 270px) and (max-width: 1070px) {
      max-inline-size: 100%;
      block-size: auto;
    }
  }
`;

const ImageContainer2 = styled.div`
  img {
    height: 28rem;

    @media screen and (min-width: 270px) and (max-width: 1070px) {
      max-inline-size: 100%;
      block-size: auto;
    }
  }
`;

const ImageContainer3 = styled.div`
  img {
    height: 26rem;

    @media screen and (min-width: 270px) and (max-width: 1070px) {
      max-inline-size: 100%;
      block-size: auto;
    }
  }
`;

const Content1 = styled.div`
  .title1 {
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

const Content2 = styled.div`
  .title2 {
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
    color: #000;
    font-family: "Inter";

    @media screen and (min-width: 270px) and (max-width: 1070px) {
      font-size: 1rem;
    }
  }
`;

const Text2 = styled.div`
  h3 {
    font-size: 1.5rem;
    font-family: "Inter";
    color: #fff;

    @media screen and (min-width: 270px) and (max-width: 1070px) {
      font-size: 1rem;
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
const Grece = () => {
  const data1 = [
    {
      description:
        "Crete is located in the middle of the Mediterranean, south of the Greek mainland. Crete is Greece's largest island with approximately 600,000 inhabitants and an area roughly the size of Södermanland – but in a much more elongated form. The people of Crete are very friendly and hospitable",
    },
  ];
  const data2 = [
    {
      description:
        "Rhodes Town is known for its long and beautiful sandy beaches. Rhodes Town offers two lovely beaches named Windy Beach and Elli Beach. The large and well-known bar street in Rhodes Town is called Orfanidou. Orfanidou Street delivers great parties, making Rhodes a perfect destination for a party trip",
    },
  ];

  const data3 = [
    {
      description:
        "As a historic volcanic island, Santorini offers both breathtaking natural experiences and a well-preserved cultural heritage. Additionally, the archipelago provides a variety of entertainment with a vibrant selection of wine and food, outdoor activities, and idyllic beaches",
    },
  ];
  return (
    <>
      <Container>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted>
            <source src={grece} type="video/mp4" />
          </StyledVideo>
        </VideoWrapper>
      </Container>

      <TravelSection1 id="offer">
        <ImageContainer>
          <img src={crete} alt="krete" />
        </ImageContainer>
        <Content1>
          <div className="title1">
            <h1>Crete</h1>
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
            <h1>Rhodos</h1>
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
          <img src={rhodos} alt="rhodos" />
        </ImageContainer2>
      </TravelSection2>

      <TravelSection3 id="offer">
        <ImageContainer3>
          <img src={santorini} alt="santorini" />
        </ImageContainer3>
        <Content3>
          <div className="title3">
            <h1>Santorini</h1>
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

export default Grece;
