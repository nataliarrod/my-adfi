import React from "react";
import NavBar from '../../components/NavBar';
import SearchBar from "../../components/SearchBar";
import Benefit from "../../components/Benefit";

function LandingContainer() {
  return (
    <div>
      <NavBar/>
      Sección 1
      Sección 2
      <Benefit/>
      Sección 4
      Sección 5
      Sección 6
      <SearchBar/>
    </div>
  );
}

export default LandingContainer;
