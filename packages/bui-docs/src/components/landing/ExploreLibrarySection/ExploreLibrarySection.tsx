import * as React from "react";
import styled from "styled-components";
import { Heading1 } from "../../atoms/Typography";
import { GradientAccentText } from "@site/src/shared/style";
import { FieldsetHeading } from "../../atoms/FieldsetHeading";
import { Chip } from "../../atoms/Chip/Chip";
import { LibraryOptionsFlexContainerWrapper } from "./style";

export interface IExploreLibrarySectionProps {}

const libraryOptions = ["NFTs", "Finance", "Charts", "Others"];

export function ExploreLibrarySection(props: IExploreLibrarySectionProps) {
  const [selectedOption, setSelectedOption] = React.useState(libraryOptions[0]);
  return (
    <div className="container">
      <FieldsetHeading>
        <Heading1>
          EXPLORE OUR <GradientAccentText>LIBRARY</GradientAccentText>
        </Heading1>
      </FieldsetHeading>
      <LibraryOptionsFlexContainerWrapper justifyContent="flex-end" >
        {libraryOptions.map((option, index) => (
          <Chip
            key={index}
            label={option}
            selected={option === selectedOption}
            onClick={() => setSelectedOption(option)}
          />
        ))}
      </LibraryOptionsFlexContainerWrapper>
    </div>
  );
}
