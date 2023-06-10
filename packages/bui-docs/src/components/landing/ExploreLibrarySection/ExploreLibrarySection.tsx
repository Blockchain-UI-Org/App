import * as React from "react";
import styled from "styled-components";
import { Heading1 } from "../../atoms/Typography";
import { GradientAccentText } from "@site/src/shared/style";
import { FieldsetHeading } from "../../atoms/FieldsetHeading";
import { SelectableChipTabs } from "../../molecules/SelectableChipTabs/SelectableChipTabs";

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
      <SelectableChipTabs
        items={libraryOptions}
        value={selectedOption}
        onChange={(value) => setSelectedOption(value)}
        justifyContent="flex-end"
      />
    </div>
  );
}
