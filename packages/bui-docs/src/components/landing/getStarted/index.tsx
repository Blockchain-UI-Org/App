import React from "react";
import { GetStartedButton, IphoneMock } from "../styled";
import "./GetStarted.scss";

const GetStartedSection = () => {
  return (
    <div className="getStarted">
      <div className="leftSection">
        <div className="header">Create beautiful Dapps quickly.</div>
        <div className="description">
          Blockchain UI is a simple, modular and accessible component library designed to help you build web3 apps.
        </div>
        <div className="getStartedSection">
          {/* <GetStartedButton>Get Started</GetStartedButton> */}
          <div className="contactUs">Alpha now available.</div>
        </div>
      </div>
      <div className="rightSection">
        <IphoneMock src="/img/iphone_mockup.jpg" alt="iphone_mockup" />
      </div>
    </div>
  );
};

export default GetStartedSection;
