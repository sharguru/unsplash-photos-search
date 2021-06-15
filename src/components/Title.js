import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
export default function Title({ clickFunction }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="titleCard">
      <h1>Picterest</h1>
      {/* <div className="center">
      <form>
  <input type="search"/>
  <i className="fa fa-search"></i>
      </form>
      </div> */}
      <div className="searchDiv">
        <input
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <SearchIcon
          onClick={(e) => {
            e.preventDefault();
            clickFunction(searchTerm);
            setSearchTerm("");
          }}
          style ={{ width: '42px',
            height: '42px'}}
          className="searchButton"
        />
      </div>
    </div>
  );
}
