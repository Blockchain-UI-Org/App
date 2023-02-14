import React from "react";
import ComponentsSection from "./library";
import FeaturesSection from "./features";
import GetStartedSection from "./getStarted";
import { Container } from "./styled";

const Landing = () => {
  return (
    <Container>
      {/* <Menu></Menu> */}
      <GetStartedSection />
      {/* <PartnersSection /> */}
      <FeaturesSection />
      <ComponentsSection />
    </Container>
  );
};

export default Landing;
