import React, { useContext } from "react";
import ComponentsSection from "./library";
import FeaturesSection from "./features";
import GetStartedSection from "./getStarted";
import { Container } from "./styled";
import { Roadmap } from "../Roadmap";
import { ThemeContext } from "@site/src/context/ThemeContextProvider";
import { JoinCommunitySection } from "./JoinCommunitySection";
import { PopularQuestionsSection } from "./PopularQuestionsSection";
import { ExploreLibrarySection } from "./ExploreLibrarySection";
import { BrowseLibrarySection } from "./BrowseLibrarySection";
import { GetInTouchSection } from "./GetInTouchSection";
import { OurTeamSection } from "./OurTeamSection";

const Landing = () => {
  // const {theme, setTheme} = useContext(ThemeContext);
  return (
    <Container>
      {/* <Menu></Menu> */}
      <section className="app-section">
        <GetStartedSection />
      </section>
      <section className="app-section">
        <JoinCommunitySection />
      </section>
      {/* <button onClick={() => theme === "light" ? setTheme("dark"): setTheme("light")}>
        change theme
      </button> */}
      {/* <PartnersSection /> */}
      <section className="app-section">
        <FeaturesSection />
      </section>
      <section className="app-section">
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
      </section>
      <section className="app-section">
        <PopularQuestionsSection />
      </section>
      <section className="app-section">
        <ExploreLibrarySection />
      </section>
      <section className="app-section">
        <BrowseLibrarySection />
      </section>
      <section className="app-section">
        <GetInTouchSection />
      </section>
      <section className="app-section">
        <OurTeamSection />
      </section>
      <section className="app-section">
        <ComponentsSection />
      </section>
    </Container>
  );
};

export default Landing;
