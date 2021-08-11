import React from "react";
import NavBar from '../../components/NavBar';
import SearchBar from "../../components/SearchBar";
import Benefit from "../../components/Benefit";
import Counter from "../../components/Counter"
import PayPlanSection from "../../components/PayPlanSection";
import Presentation from "../../components/Presentation";

function LandingContainer() {
  return (
    <div>
      <NavBar/>
      <Presentation />
      <Benefit/>
      <Counter/>
      <SearchBar/>
      <PayPlanSection />
    </div>
  );
}

export default LandingContainer;
