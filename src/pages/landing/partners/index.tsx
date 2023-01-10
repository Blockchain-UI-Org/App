import React from "react";
import { Partner, Partners } from "../styled";

const PartnersSection = () => {
  return (
    <Partners>
      <div className="header">Our Partners</div>
      <div className="partners">
        <Partner src="/assets/coinbase.svg" />
        <Partner src="/assets/circle.svg" />
        <Partner src="/assets/binance.svg" />
        <Partner src="/assets/stripe.svg" />
      </div>
    </Partners>
  );
};

export default PartnersSection;
