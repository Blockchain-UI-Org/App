import React from "react";
import { FeatureCard, Features } from "../styled";
import { Heading1, Heading3, Heading4 } from "../../atoms/Typography";
import { Card } from "../../atoms/Card/Card";

const FeaturesSection = () => {
  return (
    <Features className="container">
      <Heading1>Amazing Benefits</Heading1>

      <div className="features">
        <Card className="feature-item">
          <img src="/img/speed_icon.svg" />
          <Heading3>Speed</Heading3>
          <Heading4 color="secondary-dark">Faster development</Heading4>
        </Card>
        <Card className="feature-item">
          <img src="/img/cost_icon.svg" />
          <Heading3>Cost</Heading3>
          <Heading4 color="secondary-dark">Save development costs.</Heading4>
        </Card>

        <Card className="feature-item">
          <img src="/img/cost_icon.svg" />
          <Heading3>Simple</Heading3>
          <Heading4 color="secondary-dark">Easy-to-install and clear documentation.</Heading4>
        </Card>
        <Card className="feature-item">
          <img src="/img/cost_icon.svg" />
          <Heading3>Safe and Secure</Heading3>
          <Heading4 color="secondary-dark">Tested for vulnerabilities.</Heading4>
        </Card>
      </div>
    </Features>
  );
};

export default FeaturesSection;
