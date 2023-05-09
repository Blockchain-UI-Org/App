import React from "react";
import { IphoneMock } from "../styled";
import "./GetStarted.scss";
import { Heading1, Heading3, Heading5 } from "../../atoms/Typography/Typography";
import { Button } from "../../atoms/Button";
import { GradientAccentText } from "@site/src/shared/style";

const GetStartedSection = () => {
  return (
    <div className="getStarted container">
      <div className="leftSection">
        <Heading1>
          Create beautiful <GradientAccentText>Dapps</GradientAccentText> quickly.
        </Heading1>
        <Heading3>
          Blockchain UI is a simple, modular and accessible component library designed to help you build web3 apps.
        </Heading3>
        <Heading3>
          <GradientAccentText>Beta release now available.</GradientAccentText>
        </Heading3>
        <Button>
          <Heading5 color="button-dark" weight="semibold">
            GET STARTED
          </Heading5>
        </Button>
      </div>
      <div className="rightSection">
        <IphoneMock src="/img/iphone_mockup.png" alt="iphone_mockup" />
      </div>
    </div>
  );
};

export default GetStartedSection;
