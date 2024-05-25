import React, { useState, useEffect } from "react";
import Travel from "../Travel.json";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Section = styled.section`
  margin-bottom: 9rem;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  position: relative;
  .background {
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
const Planner = styled.div`
  padding: 2rem;
  background-color: #1f2041;
  padding: 2rem;
  box-shadow: 10px 7px 50px 0px;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 0;
    height: auto;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;

  label {
    font-size: 1rem;
    color: #fff;
    font-family: "Noto Sans Sora Sompeng";
  }
  input[type="date"] input:focus {
    outline: none;
  }
  input,
  select {
    border: none;
    width: 100%;

    margin-top: 0.7rem;
    background-color: #ede9ed;
    font-size: 1.5rem;
    border-bottom: 6px solid;
    padding-bottom: 0.3rem;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    font-size: 1rem;
    .background {
      img {
        height: 50vh;
      }
    }
  }
`;

const DestinationContainer = styled.div`
  background-color: #f8f2f8;
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

const BookingButton = styled.button`
  background-color: #bb8c98;
  color: #000;
  padding: 5px 20px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: "Noto Sans Sora Sompeng";
  font-size: 14px;
  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

const FilteringDestination = () => {
  const [destination, setDestination] = useState("");
  const [InCheck, setInCheck] = useState("");
  const [destinations, setDestinations] = useState([]);
  const handleBooking = () => {
    alert("You will receive confirmation soon");
  };

  useEffect(() => {
    // The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
    const specialDestinations = [...new Set(Travel.map((item) => item.name))];
    setDestinations(specialDestinations);
  }, []);

  const FilterData = () => {
    return Travel.filter(({ name }) => {
      return (
        (!destination ||
          name.toLowerCase().includes(destination.toLowerCase())) &&
        (!InCheck || new Date(InCheck))
      );
    });
  };

  const filterDestanation = FilterData();
  return (
    <>
      <Section>
        <Planner>
          <FormContainer>
            <Row>
              <label>Destinations</label>
              <select onChange={(event) => setDestination(event.target.value)}>
                <option value="">All Destinations</option>
                {destinations.map((destination) => (
                  <option key={destination} value={destination}>
                    {destination}
                  </option>
                ))}
              </select>
            </Row>
            {/* <Row>
                <label>Check In</label>
                <input
                  type="date"
                  onChange={(event) => setInCheck(event.target.value)}
                />
              </Row> */}

            <Row>
              <label>Check In</label>
              <DatePicker
                selected={InCheck} // Använd selected-prop för att kontrollera valt datum
                onChange={(date) => setInCheck(date)} // Använd onChange-prop för att uppdatera valt datum
                dateFormat="yyyy-MM-dd" // Ange datumformat om det behövs
                minDate={new Date()}
                placeholderText="Select a date" //
              />
            </Row>
            <BookingButton onClick={handleBooking}>Book Now</BookingButton>
          </FormContainer>
        </Planner>
      </Section>

      <DestinationContainer>
        {filterDestanation.map(({ name, image, price }) => {
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
      </DestinationContainer>
    </>
  );
};

export default FilteringDestination;
