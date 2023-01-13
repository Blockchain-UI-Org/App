import React from "react";
import { FeatureCard, Features } from "../styled";

const FeaturesSection = () => {
  return (
    <Features>
      <div className="titleHeader">Amazing Benefits</div>

      <div className="features">
        <FeatureCard>
          {" "}
          {/* <div className="featureIcon">
            <img src="/assets/feature1.svg" alt="simple_feature_icon" />
          </div> */}
          <div className="header">Speed</div>
          <div className="description">Faster development</div>
        </FeatureCard>
        <FeatureCard>
          {/* <div className="featureIcon">
            <img src="/assets/feature1.svg" alt="simple_feature_icon" />
          </div> */}
          <div className="header">Cost</div>
          <div className="description">Save development costs.</div>
        </FeatureCard>
        <FeatureCard>
          {/* <div className="featureIcon">
            <img src="/assets/feature1.svg" alt="simple_feature_icon" />
          </div> */}
          <div className="header">Simple</div>
          <div className="description">Easy-to-install and clear documentation.</div>
        </FeatureCard>
        <FeatureCard>
          {/* <div className="featureIcon">
            <img src="/assets/feature1.svg" alt="simple_feature_icon" />
          </div> */}
          <div className="header">Customizable</div>
          <div className="description">
            It can be tailored to fit the specific needs of your application and across all major blockchains.
          </div>
        </FeatureCard>
        <FeatureCard>
          {/* <div className="featureIcon">
            <img src="/assets/feature1.svg" alt="simple_feature_icon" />
          </div> */}
          <div className="header">Safe and Secure</div>
          <div className="description">
            Tested for vunerabilities.
          </div>
        </FeatureCard>
      </div>
    </Features>
  );
};

export default FeaturesSection;
