import * as React from "react";
import { ItemCardBody, SectionContainer, SectionHeading } from "./style";
import { Heading1, Heading2, Heading4 } from "../../atoms/Typography";
import { Card } from "../../atoms/Card/Card";
import { GradientAccentText } from "@site/src/shared/style";

export interface IJoinCommunitySectionProps {}

export function JoinCommunitySection(props: IJoinCommunitySectionProps) {
  return (
    <SectionContainer className="container">
      <SectionHeading className="jc-heading">
        <Heading1>Join a</Heading1>
        <Heading1>community</Heading1>
      </SectionHeading>

      <Card className="jc-card">
        <ItemCardBody>
          <Heading2>
            <GradientAccentText>11.5M+</GradientAccentText>
          </Heading2>
          <Heading4>ACTIVE ACCOUNTS</Heading4>
        </ItemCardBody>
      </Card>
      <Card className="jc-card">
        <ItemCardBody>
          <Heading2>
            <GradientAccentText>21.9M</GradientAccentText>
          </Heading2>
          <Heading4>PROJECTS</Heading4>
        </ItemCardBody>
      </Card>
      <Card className="jc-card">
        <ItemCardBody>
          <Heading2>
            <GradientAccentText>6.2M</GradientAccentText>
          </Heading2>
          <Heading4>EXECUTED TRANSACTIONS</Heading4>
        </ItemCardBody>
      </Card>
    </SectionContainer>
  );
}
