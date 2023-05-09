import React from "react";
import { GradientButton } from "../../Button/GradientButton";
import { Heading } from "../../Heading/Heading";
import { GetStartedButton, IphoneMock } from "../styled";
import "./GetStarted.scss";

const GetStartedSection = () => {
  return (
    <section className="getStarted">
      <div className="container">
        <div className="row ">
          <div className="col-sm-5">
            <div className="leftSection">
              <Heading >
                Create beautiful <span >Dapps</span> quickly.
              </Heading>
              <div className="description">
                Blockchain UI is a simple, modular and accessible component library designed to help you build web3
                apps.
              </div>
              <div className="getStartedSection">
                {/* <GetStartedButton>Get Started</GetStartedButton> */}
                <div className="contactUs">Beta release now available.</div>
              </div>

              <GradientButton className="mt-5">Get Started</GradientButton>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="rightSection">
              <IphoneMock src="/img/mock-up.png" alt="iphone_mockup" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
