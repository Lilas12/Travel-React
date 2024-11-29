import React, { useState, useEffect } from "react";
import Travel from "../Travel.json";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCheckCircle } from "react-icons/fa";

const Section = styled.section`
  margin-bottom: 7rem;
  display: flex;
  justify-content: center;
  position: relative;
  @media (min-width: 768px) {
    margin-top: 30px;
  }
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
  align-items: center;
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
  text-align: center;
  align-items: center;

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
    width: 100px;
    margin-top: 0.7rem;
    background-color: #ede9ed;
    border-bottom: 6px solid;
    padding-bottom: 0.4rem;
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

const Destinations = styled.div`
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

const Name = styled.div`
  color: #fff;
  font-weight: bolder;
  margin: 0;
`;

const Price = styled.div`
  font-weight: bold;
  color: #fff;
  margin: 0;
`;

const BookingButton = styled.button`
  background-color: #bb8c98;
  color: #000;
  padding: 10px 20px;
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

const ConfirmationMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0fdf4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #065f46;

  .icon {
    color: #10b981;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  .message-text {
    font-size: 1.1rem;
    margin: 10px 0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding: 15px;

    .icon {
      font-size: 2rem;
    }

    .message-text {
      font-size: 1rem;
    }
  }
`;

const RebookButton = styled.button`
  background-color: #bb8c98;
  color: #fff;
  padding: 10px 20px;
  margin-top: 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: "Noto Sans Sora Sompeng";
  font-size: 14px;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: #bb8c98;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 16px;
  }
`;

const FilteringDestination = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [weeks, setWeeks] = useState("");
  const [travelers, setTravelers] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  useEffect(() => {
    const specialDestinations = [...new Set(Travel.map((item) => item.name))];
    setDestinations(specialDestinations);
  }, []);

  const FilterData = () => {
    return Travel.filter(({ name }) => {
      return (
        (!destination ||
          name.toLowerCase().includes(destination.toLowerCase())) &&
        (!checkInDate || new Date(checkInDate)) &&
        (!checkOutDate || new Date(checkOutDate))
      );
    });
  };

  const handleBooking = (destinationName) => {
    if (!destination || !checkInDate || !checkOutDate || !weeks || !travelers) {
      setError("Please fill in all fields");
      return;
    }
    setConfirmation(
      `Booking confirmed for ${destinationName}. Check-in: ${checkInDate.toLocaleDateString()}, Check-out: ${checkOutDate.toLocaleDateString()}, Weeks: ${weeks}, Travelers: ${travelers}`
    );
    setError("");
  };

  const handleRebook = () => {
    setDestination("");
    setCheckInDate(null);
    setCheckOutDate(null);
    setWeeks("");
    setTravelers("");
    setConfirmation("");
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
            <Row>
              <label>Check In</label>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="yyyy-MM-dd"
              />
            </Row>
            <Row>
              <label>Check Out</label>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="yyyy-MM-dd"
              />
            </Row>
            <Row>
              <label>Weeks</label>
              <select
                value={weeks}
                onChange={(event) => setWeeks(event.target.value)}
              >
                <option value="">Select Weeks</option>
                <option value="1">1 week</option>
                <option value="2">2 weeks</option>
                <option value="3">3 weeks</option>
                <option value="3">3 weeks</option>
                <option value="3">3 days</option>
                <option value="5">5 days</option>

                <option value="6">6 days</option>

                <option value="8">8 days</option>
              </select>
            </Row>
            <Row>
              <label>Travelers</label>
              <select
                value={travelers}
                onChange={(event) => setTravelers(event.target.value)}
              >
                <option value="">Select Travelers</option>
                <option value="1">1 traveler</option>
                <option value="2">2 travelers</option>
                <option value="4">4 travelers</option>
                <option value="5">5 travelers</option>
                <option value="6">6 travelers</option>
                <option value="7">7 travelers</option>
                <option value="8">8 travelers</option>
                <option value="9">9 travelers</option>
                <option value="10">10 travelers</option>
              </select>
            </Row>
            {error && <span style={{ color: "red" }}>{error}</span>}
          </FormContainer>
        </Planner>
      </Section>

      {confirmation && (
        <ConfirmationMessage>
          <FaCheckCircle className="icon" />
          <p className="message-text">{confirmation}</p>
          <RebookButton onClick={handleRebook}>New Booking</RebookButton>
        </ConfirmationMessage>
      )}

      <DestinationContainer>
        {filterDestanation.map(({ name, image, price }) => {
          return (
            <Destinations key={name}>
              <ImageContainer>
                <img src={image} alt={name} />
              </ImageContainer>
              <ImageOverlay>
                <Name>{name}</Name>
                <Price>{price}</Price>
                <BookingButton onClick={() => handleBooking(name)}>
                  Book Now
                </BookingButton>
              </ImageOverlay>
            </Destinations>
          );
        })}
      </DestinationContainer>
    </>
  );
};

export default FilteringDestination;
