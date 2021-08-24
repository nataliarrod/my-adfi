import React from "react";
import mascot from "../../../../assets/img/png/mascotaprueba.png";
import icon1_30 from "../../../../assets/svg/1-30.svg";
import "./style.css";
import searchBarConstants from "./constants";


const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div className="searchbar-mascot">
        <img src={mascot} alt="mascotaprueba" />
      </div>
      <div className="searchbar-group">
        <div className="searchbar-title">{searchBarConstants.title}</div>
        <div className="searchbar-text">{searchBarConstants.text}</div>
        <div className="searchbar-search">
          <input
            className="search-input"
            type="text"
            placeholder="LOREM IPSUM IS SIMPLY"
          />
          <button className="search-button" type="submit">
            <img src={icon1_30} alt="1-30" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
