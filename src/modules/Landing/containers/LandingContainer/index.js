import React from "react";
import SearchBar from "../../components/SearchBar";
import Benefit from "../../components/Benefit";
import Counter from "../../components/Counter";
import PayPlanSection from "../../components/PayPlanSection";
import Presentation from "../../components/Presentation";
import Testimonials from "../../components/Testimonials";
import Layout from "../../components/Layout/Layout";
import Services from "../../components/Services";

function LandingContainer() {
  return (
    <div>
      <Layout>
        <Presentation />
        <Services />
        <Testimonials />
        <Benefit />
        <Counter />
        <SearchBar />
        <PayPlanSection />
      </Layout>
    </div>
  );
}

export default LandingContainer;
