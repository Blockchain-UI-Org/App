import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Landing from "../components/landing";
import { ThemeProvider } from "../context/ThemeContextProvider";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import { LayoutWrapper } from "../shared/style";
import { Blog } from "../components/blog";

export interface BlogPageProps {}

export default function BlogPage(props: BlogPageProps) {
  return (
    <ThemeProvider>
      <Layout description="A component library for decentralized applications <head />">
        <LayoutWrapper>
          <Blog />
        </LayoutWrapper>
      </Layout>
    </ThemeProvider>
  );
}
