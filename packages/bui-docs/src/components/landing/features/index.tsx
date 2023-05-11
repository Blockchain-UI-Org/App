import React from "react";
import { Heading } from "../../Heading/Heading";
import "./Feature.scss";

const CardsData = [
  {
    icon: "/img/speed-light.svg",
    title: "Speed",
    description: "Faster development",
  },
  {
    icon: "/img/solar-light.svg",
    title: "Cost",
    description: "Save development costs.",
  },
  {
    icon: "/img/outline-light.svg",
    title: "Simple",
    description: "Easy-to-install and clear documentation.",
  },
  {
    icon: "/img/people-light.svg",
    title: "Safe and Secure",
    description: "Tested for vunerabilities.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="featureSection">
      <div className="container">
        <div className="row">
          <Heading style={{ display: "Flex", justifyContent: "center" }}>Amazing Benefits</Heading>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {CardsData.map((data) => {
            return (
              <div className="col-md-3 mb-4 mb-md-0">
                <div className="featureCard">
                  {" "}
                  <div className="featureIcon">
                    <img src={data.icon} alt={data.title} />
                  </div>
                  <div className="header">{data.title}</div>
                  <div className="description">{data.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
