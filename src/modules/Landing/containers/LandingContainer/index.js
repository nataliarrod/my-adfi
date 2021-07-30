import React from "react";
import NavBar from '../../components/NavBar';
import SearchBar from "../../components/SearchBar";
import Benefit from "../../components/Benefit";
import Counter from "../../components/Counter"

function LandingContainer() {
  return (
    <div>
      <NavBar/>
      <Benefit/>
      <Counter/>
      <SearchBar/>
    </div>
  );
}

export default LandingContainer;
