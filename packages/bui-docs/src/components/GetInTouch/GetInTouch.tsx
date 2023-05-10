import React from "react";
import "./GetInTouch.scss";
import { BsDiscord } from "react-icons/bs";
import { GradientButton } from "../Button/GradientButton";
import { GradientInput } from "../GradientInput/GradientInput";
export const GetInTouch = () => {
  return (
    <section className="getInTouch">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="getInTouch__card">
              <div className="getInTouch__header">
                <div className="getInTouch__subtitle">GET IN TOUCH</div>
                <h4 className="getInTouch__title">
                  Building with Blockchain UI means you are part of an active developer community
                </h4>
              </div>
              <div className="getInTouch__body">
                <p className="getInTouch__info">
                  <BsDiscord />
                  <span>Join the community</span>
                </p>
                <GradientButton>Contact Us</GradientButton>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="getInTouch__card">
              <div className="getInTouch__header">
                {" "}
                <div className="getInTouch__subtitle">SIGN UP</div>
                <h4 className="getInTouch__title">Be the first to hear about updates</h4>
              </div>
              <div className="getInTouch__body">
                <div className="row">
                    <div className="col-8">
                        <GradientInput placeholder="YOUR EMAIL" />
                    </div>
                    <div className="col-4">
                        <GradientButton>Subscribe</GradientButton>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
