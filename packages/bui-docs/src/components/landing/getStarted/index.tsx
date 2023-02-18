import React from "react";
import { GetStarted, GetStartedButton, IphoneMock } from "../styled";

const GetStartedSection = () => {
  return (
    <GetStarted>
      <div className="leftSection">
        <div className="header">Create beautiful apps quickly.</div>
        <div className="description">
          Blockchain UI is a simple, modular and accessible component library designed to help you build web3 apps.
        </div>
        <div className="getStartedSection">
          {/* <GetStartedButton>Get Started</GetStartedButton> */}
          <div className="contactUs">Beta Release Date March 2023</div>
        </div>
      </div>
      <div className="rightSection">
        <IphoneMock src="/img/iphone_mockup.jpg" alt="iphone_mockup" />
      </div>
    </GetStarted>
  );
};

export default GetStartedSection;
