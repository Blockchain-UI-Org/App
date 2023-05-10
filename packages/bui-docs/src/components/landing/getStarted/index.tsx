import { useHistory } from "@docusaurus/router";
import React from "react";
import { GradientButton } from "../../Button/GradientButton";
import { Heading } from "../../Heading/Heading";
import "./GetStarted.scss";

const GetStartedSection = () => {
  const history = useHistory();
  return (
    <section className="getStarted">
      <div className="container">
        <div className="row ">
          <div className="col-md-5 order-1 order-md-0">
            <div className="leftSection">
              <Heading>
                Create beautiful <span>Dapps</span> quickly.
              </Heading>
              <div className="description">
                Blockchain UI is a simple, modular and accessible component library designed to help you build web3
                apps.
              </div>

              <div className="contactUs">Beta release now available.</div>

              <GradientButton className="button" onClick={() => history.push("/docs/intro")}>
                Get Started
              </GradientButton>
            </div>
          </div>
          <div className="col-md-6 order-0 order-md-1">
            <div className="rightSection">
              <img src="/img/mock-up.png" alt="iphone_mockup" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
