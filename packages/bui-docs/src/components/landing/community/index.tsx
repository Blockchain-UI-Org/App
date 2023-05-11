import React from "react";
import { Heading } from "../../Heading/Heading";
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
            <div className="d-flex flex-wrap   h-100">
              <div className="flex-grow-1 pe-3 mb-4 mb-xl-0 ">
                <div className="communityCard">
                  <h2 className="count">94</h2>
                  <h4 className="title">Weekly Downloads</h4>
                </div>
              </div>
              <div className="flex-grow-1 pe-3 mb-4 mb-xl-0 ">
                <div className="communityCard">
                  <h2 className="count">26</h2>
                  <h4 className="title">Components</h4>
                </div>
              </div>
              <div className="flex-grow-1">
                <div className="communityCard">
                  <h2 className="count">1000</h2>
                  <h4 className="title">GIT COMMITS</h4>
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
