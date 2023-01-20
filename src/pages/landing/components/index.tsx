import React from "react";
import { Components } from "../styled";

const ComponentsSection = () => {
  return (
    <Components>
      <div className="titleHeader">Explore Our Library</div>

      <div className="subHeader">Charts</div>
      <div className="carousel">
        <img src="/assets/components/areaChart3.png" alt="area_chart" />
        <img src="/assets/components/pieChart2.png" alt="nft_card" />
      </div>

      <div className="subHeader">NFT Cards</div>
      <div className="carousel">
        <img src="/assets/nft5.webp" alt="nft_card" />
        <img src="/assets/nft9.jpeg" alt="nft_card" />
        <img src="/assets/nft1.jpeg" alt="nft_card" />
      </div>

      <div className="subHeader">Credit Debit Cards</div>
      <div className="carousel">
        <img src="/assets/components/creditCard.png" alt="creditCard" />
        <img src="/assets/components/creditCard2.png" alt="creditCard" />
      </div>
      {/* <div className="subHeader">More</div> */}
    </Components>
  );
};

export default ComponentsSection;
