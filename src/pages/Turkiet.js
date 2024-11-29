import React from "react";

import styled from "styled-components";

import antalya from "../assets/images/antalya.png";
import bodrum from "../assets/images/bodrum.png";
import istanbul from "../assets/images/istanbul.mp4";

const TurkeySquare = styled.div`
  background-color: #f8f2f8;
  color: #000;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: bold;
  margin-top: -40px;
`;

const StyledTitle1 = styled.h1`
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
  padding: 20px;
  font-size: 20px;
  font-family: "Inter";
  margin: -25px auto;
  line-height: 1.2;
  word-break: break-word;
  text-align: left;
  margin-bottom: 20px;
`;

const TravelSection2 = styled.section`
  background-color: #ede9ed;
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
  }
`;

const TravelSection3 = styled.section`
  background-color: #070707;
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

const ImageContainer2 = styled.div`
  img {
    height: 28rem;
    margin-top: 150px;

    @media screen and (min-width: 270px) and (max-width: 1070px) {
      max-inline-size: 100%;
      block-size: auto;
      margin-top: 0px;
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

const Content2 = styled.div`
  .title2 {
    margin: 2px;
    color: #1f2041;

    h1 {
      font-size: 35px;
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
    color: #fff;
    font-family: "Inter";

    @media screen and (min-width: 270px) and (max-width: 1070px) {
      font-size: 1.5rem;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: 100px;
`;
const Turkey = () => {
  const data1 = [
    {
      description:
        "The holiday resorts in the Gulf of Antalya are strung like pearls, from Kemer in the west to Alanya in the east. Together, these destinations offer something for everyone: from affordable apartments to luxurious hotels, fantastic beaches, a warm climate from spring to autumn, historical sites, excellent golf courses, and a variety of activities for both young and old. If you enjoy shopping, you’ve come to the right place. Both in Antalya and along this entire stretch of coast, you will find shops, markets, and bazaars where prices are much lower than back home.",
    },
  ];
  const data2 = [
    {
      description:
        "Bodrum in Turkey is the country's most charming and versatile coastal city. This destination suits all types of travelers, thanks to its beautiful pebble and sandy beaches, affordable shopping, wonderful restaurants, rich history, and vibrant nightlife",
    },
  ];

  return (
    <>
      <Container>
        <VideoWrapper>
          <StyledVideo autoPlay loop muted>
            <source src={istanbul} type="video/mp4" />
          </StyledVideo>
        </VideoWrapper>
      </Container>

      <TurkeySquare>
        <StyledTitle1>
          <h1>Turkey 🇹🇷</h1>
        </StyledTitle1>
        <StyledDescription>
          <p>
            Istanbul is the city that straddles both Europe and Asia, offering
            an exciting culture, world-class historical monuments, and a
            vibrant, cosmopolitan city life. Istanbul is a populous city where
            modern urban life blends with ancient traditions. Here, you can find
            everything your heart desires in terms of shopping, cuisine,
            fantastic attractions, and a unique atmosphere
          </p>
        </StyledDescription>
      </TurkeySquare>

      <TravelSection3 id="offer">
        <ImageContainer3>
          <img src={bodrum} alt="bodrum" />
        </ImageContainer3>
        <Content3>
          <div className="title3">
            <h1>Bodrum</h1>
          </div>
          <List className="list">
            {data2.map(({ description }) => (
              <ListItem key={description}>
                <Text3>
                  <h3>{description}</h3>
                </Text3>
              </ListItem>
            ))}
          </List>
        </Content3>
      </TravelSection3>

      <TravelSection2 id="offer">
        <Content2>
          <div className="title2">
            <h1>Antalya</h1>
          </div>
          <List className="list">
            {data1.map(({ description }) => (
              <ListItem key={description}>
                <Text2>
                  <h3>{description}</h3>
                </Text2>
              </ListItem>
            ))}
          </List>
        </Content2>
        <ImageContainer2>
          <img src={antalya} alt="antalya" />
        </ImageContainer2>
      </TravelSection2>
    </>
  );
};

export default Turkey;
