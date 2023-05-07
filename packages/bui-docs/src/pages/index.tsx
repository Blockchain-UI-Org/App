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

/** Add global background color for whole page.. */
const Wrapper = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.primary.background};
`;
export default function Home(): JSX.Element {
  return (
    <ThemeProvider>
      <Layout description="A component library for decentralized applications <head />">
        <Wrapper>
          <Landing />
        </Wrapper>
      </Layout>
    </ThemeProvider>
  );
}
