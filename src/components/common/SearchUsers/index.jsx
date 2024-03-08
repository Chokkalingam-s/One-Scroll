import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./index.scss";
import { Button } from "antd";



export default function SearchUsers({ setIsSearch, setSearchInput }) {
  const handleSearchCotton = () => {
    setSearchInput("Cotton");
  };
  const handleSearchRetailers = () => {
    setSearchInput("Retailers");
  };
  const handleSearchDistributors = () => {
    setSearchInput("Distributor");
  };

  

  return (
    <div className="search-users">
      <input
        placeholder="Search Users.."
        onChange={(event) => setSearchInput(event.target.value)}
      />

      <AiOutlineCloseCircle
        className="close-icon"
        size={20}
        onClick={() => {
          setIsSearch(false);
          setSearchInput("");
        }}
      />
      <Button type="default" className="searchBtn" onClick={handleSearchCotton}>Cotton Dealers</Button>
      <Button type="default" className="searchBtn" onClick={handleSearchRetailers}>Retailers</Button>
      <Button type="default" className="searchBtn" onClick={handleSearchDistributors}>Distributors</Button>

    </div>
  );
}
