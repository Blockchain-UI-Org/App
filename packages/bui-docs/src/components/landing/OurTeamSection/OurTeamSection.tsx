import * as React from "react";
import { Heading1 } from "../../atoms/Typography";
import { FieldsetHeading } from "../../atoms/FieldsetHeading";

export interface IOurTeamSectionProps {}

export function OurTeamSection(props: IOurTeamSectionProps) {
  return (
    <div className="container">
      <FieldsetHeading>
        <Heading1>
          OUR <span className="fancy-text">TEAM</span>
        </Heading1>
      </FieldsetHeading>
    </div>
  );
}
