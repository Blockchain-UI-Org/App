import React from "react";
import "./SingleBlogSection.scss";
import BlogCard from "../BlogCard/BlogCard";
import { blogData } from "../BlogSection/blogData";

const SingleBlogSection = () => {
  return (
    <div className="container">
      <div className="cardWrapper">
          <h4 className="upperTitle">NFTs</h4>
        <div>
          <img src="/img/sun.png" alt="hey" className="w-100"/>
        </div>
        <div className="contentWrapper d-flex justify-content-between">
          <h3 className="title">What Is An NFT? Non-Fungible Tokens Explained</h3>
         
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
        <p className="content">
            Non-fungible tokens (NFTs) seem to be everywhere these days. From art and music to tacos and toilet paper,
            these digital assets are selling like 17th-century...
          </p>
      </div>
      <div className="row">
        <BlogCard blogData={blogData} col={4}/>
      </div>
    </div>
  );
};

export default SingleBlogSection;
