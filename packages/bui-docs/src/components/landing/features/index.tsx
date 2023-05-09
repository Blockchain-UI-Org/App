import React from "react";
import { Heading } from "../../Heading/Heading";
import "./Feature.scss";

const CardsData = [
  {
    icon: "/img/speed.png",
    title: "Speed",
    description: "Faster development",
  },
  {
    icon: "/img/solar.png",
    title: "Cost",
    description: "Save development costs.",
  },
  {
    icon: "/img/outline.png",
    title: "Simple",
    description: "Easy-to-install and clear documentation.",
  },
  {
    icon: "/img/people.png",
    title: "Safe and Secure",
    description: "Tested for vunerabilities.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="featureSection">
      <Heading>Amazing Benefits</Heading>

      <div className="container">
        <div className="row">
          {CardsData.map((data) => {
            return (
              <div className="col-sm-3">
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
