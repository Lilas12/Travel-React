import React, { useState } from "react";
import { Link } from "react-router-dom";
import Travel from "../Travel.json";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-top: 20px;
    padding: 20px;
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1.3rem;
  margin-right: 0.5rem;
`;

const Button = styled(Link)`
  background-color: #bb8c98;
  color: #000;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: 200;
  font-family: "Noto Sans Sora Sompeng";
  margin-top: 0px;
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transform: scale(1);
  }
`;

const SearchFunction = ({ handleResults }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    const result = search
      ? Travel.filter((item) =>
          // The toLowerCase() method converts a string to lowercase letters.
          item.name.toLowerCase().startsWith(search.toLowerCase())
        )
      : Travel;
    handleResults(result);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search by firt letters "
        value={search}
        onChange={handleChange}
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchContainer>
  );
};

export default SearchFunction;
