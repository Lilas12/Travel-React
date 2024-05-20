import React from "react";
import Travel from "../Travel.json";
import video from "../assets/images/video.mp4";
import styled from "styled-components";

const Square = styled.div`
  background-color: #070707;
  color: #fff;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: bold;
  margin-top: 0px;
  /* margin-top: 100px; */
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Content = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  bottom: 40px;
`;

const Heading = styled.h1`
  font-size: 50px;
  color: #070707;
  font-family: "Noto Sans Sora Sompeng";
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 35px;
    margin-top: -70px;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  margin-top: 90px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: #f8f2f8;

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

const Info = styled.div`
  text-align: center;
  h2 {
    font-size: 2rem;
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

const Destinations = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Destination = styled.div`
  position: relative;
  flex: 1 1 calc(50% - 2rem);
  max-width: calc(50% - 2rem);

  @media (min-width: 768px) {
    flex: 1 1 calc(33.333% - 2rem);
    max-width: calc(33.333% - 2rem);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 25rem;
  overflow: hidden;
  border-radius: 0.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(to bottom, #ffffff14, #000000ae);
  padding: 1rem;
  border-radius: 0.5rem;
`;

const Name = styled.h3`
  color: #fff;
  font-weight: bolder;
  margin: 0;
`;

const Price = styled.h3`
  font-weight: bold;
  color: #fff;
  margin: 0;
`;

const LandingPage = () => {
  return (
    <>
      <Container>
        <StyledVideo autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </StyledVideo>
        <Content>
          <Heading>Create everlasting memories with us</Heading>
        </Content>
      </Container>

      <Square>
        <StyledTitle1>
          <h1>Explore the World with Our New Travel Website</h1>
        </StyledTitle1>
        <StyledDescription>
          <p>
            Welcome to our newly opened travel website - your portal to
            adventures, discoveries, and memories for life! We are proud to
            introduce a platform that not only helps you travel but also
            inspires you to explore the world in a way that is unique to you.
          </p>
        </StyledDescription>
      </Square>

      <Section id="destination">
        <Info>
          <h2>
            Top <span>Destinations</span> In The World
          </h2>
        </Info>

        <Destinations>
          {Travel.map(({ name, image, price }) => {
            return (
              <Destination key={name}>
                <ImageContainer>
                  <img src={image} alt={name} />
                </ImageContainer>
                <ImageOverlay>
                  <Name>{name}</Name>
                  <Price>{price}</Price>
                </ImageOverlay>
              </Destination>
            );
          })}
        </Destinations>
      </Section>
    </>
  );
};

export default LandingPage;
