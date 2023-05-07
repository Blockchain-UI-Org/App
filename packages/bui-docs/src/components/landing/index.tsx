import React, { useContext } from "react";
import ComponentsSection from "./library";
import FeaturesSection from "./features";
import GetStartedSection from "./getStarted";
import { Container } from "./styled";
import { Roadmap } from "../Roadmap";
import { ThemeContext } from "@site/src/context/ThemeContextProvider";

const Landing = () => {
  // const {theme, setTheme} = useContext(ThemeContext);
  return (
    <Container>
      {/* <Menu></Menu> */}

      <GetStartedSection />
      {/* <button onClick={() => theme === "light" ? setTheme("dark"): setTheme("light")}>
        change theme
      </button> */}
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
      <ComponentsSection />
    </Container>
  );
};

export default Landing;
