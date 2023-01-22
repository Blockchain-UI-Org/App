import React from "react";
import ComponentsSection from "./components";
import FeaturesSection from "./features";
import GetStartedSection from "./getStarted";
import Menu from "./menu";
import PartnersSection from "./partners";
import { Container } from "./styled";

const Landing = () => {
  return (
    <Container>
      <Menu></Menu>
      <GetStartedSection />
      <PartnersSection />
      <FeaturesSection />
      <ComponentsSection />
    </Container>
  );
};

export default Landing;
