import * as React from "react";
import styled from "styled-components";
import { Heading1 } from "../../atoms/Typography";

export interface IExploreLibrarySectionProps {}

const FieldsetHeading = styled.fieldset`
  width: 100%;
  border: 0px;
  border-image: linear-gradient(90deg, #8bd6ff 0%, #9effff 50.31%, #d3bfff 100%);
  border-top-width: 2px;
  border-top-style: solid;
`;

const HeadingWrapper = styled.div`
  margin-top: -40px;
  margin-left: 80px;
  background-color: ${({ theme }) => theme.primary.background};
  width: fit-content;
  padding: 0px 20px;
`;

const GradientLine = styled.div`
  margin-top: 40px;
  background: linear-gradient(90deg, #8bd6ff 0%, #9effff 50.31%, #d3bfff 100%);
  height: 2px;
  width: 100%;
`;

export function ExploreLibrarySection(props: IExploreLibrarySectionProps) {
  return (
    <div className="container">
      <GradientLine />
      <HeadingWrapper>
        <Heading1>EXPLORE OUR <span className="fancy-text">LIBRARY</span></Heading1>
      </HeadingWrapper>
      <FieldsetHeading>
        <legend>EXPLORE OUR LIBRARY</legend>
        <div>This is content...</div>
      </FieldsetHeading>
    </div>
  );
}
