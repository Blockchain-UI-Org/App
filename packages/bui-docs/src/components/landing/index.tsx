import React from "react";
import ComponentsSection from "./library";
import FeaturesSection from "./features";
import GetStartedSection from "./getStarted";
import { Container } from "./styled";
import { Roadmap } from "../Roadmap";
import CommunitySection from "./community";
import { FAQSection } from "../FAQSection/FAQSection";
import { GetInTouch } from "../GetInTouch/GetInTouch";

const Landing = () => {
  return (
    <div>
      {/* <Menu></Menu> */}
      <GetStartedSection />
      <CommunitySection />

      {/* <PartnersSection /> */}

      <FeaturesSection />

      <Roadmap
        items={[
          { title: "Launch", description: "", completed: true },
          {
            completed: true,
            title: "Component Library",
            description: "Low Code",
          },
          {
            completed: false,
            title: "Theme Library",
            description: "Less Code",
          },
          { completed: false, title: "Drag n Drop", description: "No Code" },
        ]}
      />
      <FAQSection />
      <GetInTouch />
      <ComponentsSection />
    </div>
  );
};

export default Landing;
