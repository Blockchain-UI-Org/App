import React from "react";
import { Heading } from "../../Heading/Heading";
import "./Feature.scss";


const CardsData = [{
  icon: "",
  title: "Speed",
  description: ""
}]

const FeaturesSection = () => {
  return (
    <div className="featureSection">
      <Heading>Amazing Benefits</Heading>

      <div className="features">
        <div className="col-sm-3">

        </div>
        <div className="featureCard">
          {" "}
          <div className="featureIcon">
            <img src="/assets/feature1.svg" alt="simple_feature_icon" />
          </div>
          <div className="header">Speed</div>
          <div className="description">Faster development</div>
        </div>
        <div className="featureCard">
          {/* <div className="featureIcon">
            <img src="/assets/feature1.svg" alt="simple_feature_icon" />
          </div> */}
          <div className="header">Cost</div>
          <div className="description">Save development costs.</div>
        </div>
        <div className="featureCard">
          {/* <div className="featureIcon">
            <img src="/assets/feature1.svg" alt="simple_feature_icon" />
          </div> */}
          <div className="header">Simple</div>
          <div className="description">Easy-to-install and clear documentation.</div>
        </div>
        {/* <div>
          <div className="featureIcon">
            <img src="/assets/feature1.svg" alt="simple_feature_icon" />
          </div>
          <div className="header">Customizable</div>
          <div className="description">
            It can be tailored to fit the specific needs of your application and across all major blockchains.
          </div>
        </div> */}
        <div className="featureCard">
          {/* <div className="featureIcon">
            <img src="/assets/feature1.svg" alt="simple_feature_icon" />
          </div> */}
          <div className="header">Safe and Secure</div>
          <div className="description">Tested for vunerabilities.</div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
