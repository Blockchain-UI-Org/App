import React from "react";
import { FeatureCard, Features } from "../styled";

const FeaturesSection = () => {
  return (
    <Features>
      <div className="titleHeader">Amazing Features</div>
      <div className="description">
        Less code and more time building a great experience for your customers.
      </div>
      <div className="features">
        <FeatureCard>
          {" "}
          <div className="featureIcon">
            <img src="/assets/feature1.svg" alt="simple_feature_icon" />
          </div>
          <div className="header">Beautiful</div>
          <div className="description">
            Customize any part of our components to match your project and
            create incredible designs.
          </div>
        </FeatureCard>
        <FeatureCard>
          <div className="featureIcon">
            <img src="/assets/feature1.svg" alt="simple_feature_icon" />
          </div>
          <div className="header">Responsive</div>
          <div className="description">
            Designed with responsiveness in mind. Modify components size and
            format with ease..
          </div>
        </FeatureCard>
        <FeatureCard>
          <div className="featureIcon">
            <img src="/assets/feature1.svg" alt="simple_feature_icon" />
          </div>
          <div className="header">Simple</div>
          <div className="description">
            Spend less time writing UI code and more time building a great
            experience for your customers.
          </div>
        </FeatureCard>
      </div>
    </Features>
  );
};

export default FeaturesSection;
