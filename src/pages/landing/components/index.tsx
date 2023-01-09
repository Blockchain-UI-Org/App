import React from "react";
import { Components } from "../styled";

const ComponentsSection = () => {
  return (
    <Components>
      <div className="titleHeader">Explore Our Library</div>
      <div className="description">Stunning and lightning fast components.</div>
      <div className="carousel">
        <img src="/assets/components/areaChart.png" alt="area_chart" />
        <img src="/assets/nft3.jpeg" alt="nft_card" />
        <img src="/assets/components/pieChart.png" alt="pie_chart" />
      </div>
    </Components>
  );
};

export default ComponentsSection;
