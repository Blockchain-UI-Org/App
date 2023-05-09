import * as React from "react";
import { Heading1, Heading3, Heading4 } from "../../atoms/Typography";
import { FieldsetHeading } from "../../atoms/FieldsetHeading";
import { FlexContainer, GradientAccentText } from "@site/src/shared/style";
import { TeamCardContainerWrapper, TeamImageImage } from "./style";
import { TEAM_DATA } from "@site/src/config/team";

export interface IOurTeamSectionProps {}

const OurTeamItemCard = ({ image, name, designation }: { image: string; name: string; designation: string }) => (
  <FlexContainer flexDirection="column" alignItems="center" className="flex-1">
    <TeamImageImage src={image} />
    <Heading3>{name}</Heading3>
    <Heading4 color="secondary-dark">{designation}</Heading4>
  </FlexContainer>
);

export function OurTeamSection(props: IOurTeamSectionProps) {
  return (
    <div className="container">
      <FieldsetHeading>
        <Heading1>
          OUR <GradientAccentText>TEAM</GradientAccentText>
        </Heading1>
      </FieldsetHeading>
      <TeamCardContainerWrapper wrap flexDirection="row" gap={20}>
        {TEAM_DATA.map((team, i) => (
          <OurTeamItemCard key={i} name={team.name} designation={team.designation} image={team.image} />
        ))}
      </TeamCardContainerWrapper>
    </div>
  );
}
