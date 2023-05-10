import React from "react";
import { Heading } from "../../Heading/Heading";
import { Container } from "../styled";
import "./Community.scss";

const CommunitySection = () => {
  return (
    <section className="communitySection">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Heading>Join a Community</Heading>
          </div>
          <div className="col-md-8">
            <div className="row h-100">
              <div className="col-md-8 mb-4 mb-xl-0 col-xl-4">
                <div className="communityCard">
                  <h2 className="count">11.5M+</h2>
                  <h4 className="title">active accounts</h4>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-xl-0 col-xl-3">
                <div className="communityCard">
                  <h2 className="count">21.9M</h2>
                  <h4 className="title">projects</h4>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="communityCard">
                  <h2 className="count">6.2M</h2>
                  <h4 className="title">executed transactions</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
