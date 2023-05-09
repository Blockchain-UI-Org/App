import { FlexContainer } from "@site/src/shared/style";
import * as React from "react";
import { Card } from "../../atoms/Card";
import { Heading2, Heading3, Heading4, Heading5 } from "../../atoms/Typography";
import { DiscordIcon } from "../../atoms/Icons/DiscordIcon";
import { Button } from "../../atoms/Button";
import styled from "styled-components";
import { device } from "@site/src/theme/AppThemes/Theme";

export interface IGetInTouchSectionProps {}

const CardWrapper = styled(Card)`
  flex: 1;
  height: 540px;
  @media ${device.tablet} {
    height: auto;
  }
`;

export function GetInTouchSection(props: IGetInTouchSectionProps) {
  return (
    <FlexContainer wrap className="container">
      <CardWrapper>
        <FlexContainer flexDirection="column" alignItems="flex-start" justifyContent="space-between" gap={40}>
          <FlexContainer flexDirection="column" alignItems="flex-start" justifyContent="flex-start">
            <Heading4 color="secondary-dark">GET IN TOUCH</Heading4>
            <Heading2 color="primary-dark">
              Building with Blockchain UI means you are part of an active developer community
            </Heading2>
            <FlexContainer flexDirection="row">
              <DiscordIcon />
              <Heading3>Join the community</Heading3>
            </FlexContainer>
          </FlexContainer>
          <Button>
            <Heading5 weight="semibold" color="button-dark">
              CONTACT US
            </Heading5>
          </Button>
        </FlexContainer>
      </CardWrapper>
      <CardWrapper>
        <FlexContainer flexDirection="column" alignItems="flex-start" justifyContent="space-between" gap={40}>
          <FlexContainer flexDirection="column" alignItems="flex-start" justifyContent="flex-start">
            <Heading4 color="secondary-dark">SIGN UP</Heading4>
            <Heading2 color="primary-dark">Be the first to hear about updates</Heading2>
          </FlexContainer>
          <Button>
            <Heading5 weight="semibold" color="button-dark">
              SUBSCRIBE
            </Heading5>
          </Button>
        </FlexContainer>
      </CardWrapper>
    </FlexContainer>
  );
}
