import React, { useState } from "react";
import "./BlogSection.scss";
import BlogCard from "../BlogCard/BlogCard";
import { GradientButton } from "../Button";
import { blogData } from "./blogData";

export const categories = ["All", "NFTs", "Finance", "Charts", "Other"];

const BlogSection = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="container relative">
      <div className="relative">
        <div className="blogBanner">
          <h1>Blog</h1>
        </div>
        <div className="searchWrapper">
          <div className="inputWrapper">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="categories">
        {categories.map((category, index) => {
          return (
            <div
              className={`category ${active === index ? "toggleCategory" : ""}`}
              key={index}
              onClick={() => setActive(index)}
            >
              {category}
            </div>
          );
        })}
      </div>
      <div className="cardWrapper row">
        <div className="col-md-6">
          <img src="/img/sun.png" alt="hey" />
        </div>
        <div className="contentWrapper col-md-6">
          <h4 className="upperTitle">NFTs</h4>
          <h3 className="title">What Is An NFT? Non-Fungible Tokens Explained</h3>
          <p className="content">
            Non-fungible tokens (NFTs) seem to be everywhere these days. From art and music to tacos and toilet paper,
            these digital assets are selling like 17th-century...
          </p>
          <div className="d-flex align-items-center">
            <div>
              <img src="/img/author.png" alt="author img" />
            </div>
            <div className="d-flex flex-column authorWrapper">
              <span className="name">Cindy Ellington</span>
              <span className="date">April 17, 2023</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row blogsDiv">
        <BlogCard blogData={blogData} col={4}/>
      </div>
      <div className="btnWrapper d-flex justify-content-center">
        <GradientButton>load more</GradientButton>
      </div>
    </div>
  );
};

export default BlogSection;
