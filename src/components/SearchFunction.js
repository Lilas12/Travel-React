import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Travel from "../Travel.json";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 160px;

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-top: 120px;
    padding: 20px;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  position: relative;
  background-color: #1f2041;
  padding: 3rem;
  box-shadow: 10px 7px 50px 0px;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 2.5rem 0.5rem 0.5rem;
  font-size: 1.7rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;

  &:focus {
    outline: none;
    border-color: #bb8c98;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 60px;
  top: 50%;
  font-size: 3rem;
  transform: translateY(-50%);
  color: #bb8c98;
`;

const DestinationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const Destinations = styled.div`
  position: relative;
  flex: 1 1 calc(45% - 1rem);
  max-width: calc(45% - 1rem);
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    flex: 1 1 calc(30% - 1rem);
    max-width: calc(30% - 1rem);
  }

  @media (max-width: 480px) {
    flex: 1 1 calc(100% - 1rem);
    max-width: calc(100% - 1rem);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 18rem;
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
  color: #1f2041;
  font-weight: bolder;
  margin: 0;
  margin-bottom: 0.9rem;
`;

const Description = styled.p`
  font-weight: bold;
  color: #000;
  margin: 1rem 0 0;
`;

const NoResults = styled.p`
  color: #1f2041;
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const Loader = styled.div`
  font-size: 1.5rem;
  color: #1f2041;
  margin-top: 2rem;
`;

const SearchFunction = () => {
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState(Travel);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const result = search
        ? Travel.filter((item) =>
            item.name.toLowerCase().startsWith(search.toLowerCase())
          )
        : Travel;
      setFilteredResults(result);
      setLoading(false);
    }, 200); // Delay to simulate loading time and debounce effect

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <>
      <SearchContainer>
        <SearchWrapper>
          <SearchInput
            type="text"
            placeholder="Search by first letters"
            value={search}
            onChange={handleChange}
          />
          <SearchIcon />
        </SearchWrapper>
      </SearchContainer>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <DestinationContainer>
          {filteredResults.length > 0 ? (
            filteredResults.map(({ name, image, description }) => (
              <Destinations key={name}>
                <Name>{name}</Name>
                <ImageContainer>
                  <img src={image} alt={name} loading="lazy" />
                  <ImageOverlay></ImageOverlay>
                </ImageContainer>
                <Description>{description}</Description>
              </Destinations>
            ))
          ) : (
            <NoResults>Inga resultat funna</NoResults>
          )}
        </DestinationContainer>
      )}
    </>
  );
};

export default SearchFunction;
