import React from "react";
import NavBar from '../../components/NavBar';
import SearchBar from "../../components/SearchBar";
import Counter from "../../components/Counter"

function LandingContainer() {
  return (
    <div>
      <NavBar />
      Sección 1
      Sección 2
      <Counter/>
      Sección 4
      Sección 5
      Sección 6
      <SearchBar/>
    </div>
  );
}

export default LandingContainer;
