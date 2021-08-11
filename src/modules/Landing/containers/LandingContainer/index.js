import React from "react";
import SearchBar from "../../components/SearchBar";
import Benefit from "../../components/Benefit";
import Counter from "../../components/Counter";
import PayPlanSection from "../../components/PayPlanSection";
import Presentation from "../../components/Presentation";
import Layout from "../../components/Layout/Layout";

function LandingContainer() {
  return (
    <div>
      <Layout>
        <Presentation />
        <Benefit />
        <Counter />
        <SearchBar />
        <PayPlanSection />
      </Layout>
    </div>
  );
}

export default LandingContainer;
