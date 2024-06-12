import React, { useState } from "react";
import styled from "styled-components";
import travelData from "../Travel.json";
import { FaCheckCircle } from "react-icons/fa";

const CarSquare = styled.div`
  background-color: #ede9ed;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: bold;
  margin-top: 100px;
`;

const StyledTitle1 = styled.h1`
  color: #000;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f2f8;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;
  background-color: #1f2041;
  padding: 2rem;
  box-shadow: 10px 7px 50px 0px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #f8f2f8;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1em;
  background-color: #bb8c98;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #bb8c98;
  }
`;

const CarList = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const CarItem = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;

const ConfirmationPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0ffe0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ConfTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #008000;
`;

const ConfText = styled.p`
  font-size: 1em;
  margin-bottom: 10px;
`;

const CarRental = () => {
  const [destination, setDestination] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [carType, setCarType] = useState("");
  const [cars, setCars] = useState([]); //Den här skapa en lista över alla bilar.
  const [selectedCar, setSelectedCar] = useState({});
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination || !pickUpDate || !dropOffDate || !carType) {
      setError("Please fill in all fields");
      return;
    }
    setCars([
      { id: 1, name: "Toyota", price: 500, image: "/TravelImage/toyota.png" },
      { id: 2, name: "Ford", price: 800, image: "/TravelImage/ford.png" },
      {
        id: 3,
        name: "Volkswagen",
        price: 550,
        image: "/TravelImage/volkswagen.png",
      },
      { id: 4, name: "BMW", price: 700, image: "/TravelImage/bmw.png" },
      { id: 5, name: "Audi A4", price: 750, image: "/TravelImage/audi.png" },
      {
        id: 6,
        name: "Mercedes-Benz C-Class",
        price: 850,
        image: "/TravelImage/mercedes.png",
      },
      { id: 7, name: "Kia", price: 490, image: "/TravelImage/kia.png" },
      { id: 8, name: "Mazda ", price: 530, image: "/TravelImage/mazda.png" },
    ]);
    setError("");
  };

  // Function to handle booking confirmation
  const handleConfirmation = (car) => {
    setSelectedCar(car);
    setBookingConfirmed(true);
    setCars([]);
  };

  // Function to reset form and booking status for a new booking
  const handleNewBooking = () => {
    setBookingConfirmed(false);
    setSelectedCar({});
    setDestination("");
    setPickUpDate("");
    setDropOffDate("");
    setCarType("");
    setError("");
  };

  return (
    <>
      <CarSquare>
        <StyledTitle1>
          <h1>Rent a Car</h1>
        </StyledTitle1>
        <StyledDescription>
          <p>
            Renting a car is a popular option for exploring various countries
            and regions around the world. Whether you're traveling for leisure,
            business, or perhaps a combination of both, having access to a car
            can provide you with the freedom and flexibility to discover places
            on your own schedule and at your own pace.
          </p>
        </StyledDescription>
      </CarSquare>
      <Container>
        <Title>Rent a Car</Title>
        {!bookingConfirmed ? (
          // Form for booking
          <Form onSubmit={handleSubmit}>
            <Select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Select location</option>
              {travelData.map((destination) => (
                <option key={destination.id} value={destination.name}>
                  {destination.name}
                </option>
              ))}
            </Select>
            <Input
              type="date"
              value={pickUpDate}
              onChange={(e) => setPickUpDate(e.target.value)}
            />
            <Input
              type="date"
              value={dropOffDate}
              onChange={(e) => setDropOffDate(e.target.value)}
            />
            <Select
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
            >
              <option value="">Choose car type</option>
              <option value="Compact">Compact</option>
              <option value="SUV">SUV</option>
              <option value="Luxury">Luxury car</option>
            </Select>
            {error && <span style={{ color: "red" }}>{error}</span>}
            <Button type="submit">Search</Button>
          </Form>
        ) : (
          // Confirmation page
          <ConfirmationPage>
            <FaCheckCircle size={50} color="green" />
            <ConfTitle>Booking confirmation</ConfTitle>
            <ConfText>The booking is confirmed!</ConfText>
            <ConfText>Destination: {destination}</ConfText>
            <ConfText>Pick-up date: {pickUpDate}</ConfText>
            <ConfText>Drop-off date: {dropOffDate}</ConfText>
            {selectedCar && (
              <>
                <ConfText>Car: {selectedCar.name}</ConfText>
                <ConfText>Price: {selectedCar.price} kr/day</ConfText>
              </>
            )}
            <Button onClick={handleNewBooking}>New Booking</Button>
          </ConfirmationPage>
        )}
        {/* List of cars */}
        <CarList>
          {cars.map((car) => (
            <CarItem key={car.id}>
              <img src={car.image} alt={car.name} />
              <div>
                <p>{car.name}</p>
                <p>{car.price} kr/day</p>
              </div>
              <Button onClick={() => handleConfirmation(car)}>Book</Button>
            </CarItem>
          ))}
        </CarList>
      </Container>
    </>
  );
};

export default CarRental;
