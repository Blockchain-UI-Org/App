import * as React from "react";
import { HeroSectionBackgroundImage, SearchBarWrapper } from "./style";
import { Heading1 } from "../../atoms/Typography";
import { SearchBar } from "../../molecules/SearchBar";

export interface IHeroSectionProps {}

export function HeroSection(props: IHeroSectionProps) {
  return (
    <div className="container">
      <HeroSectionBackgroundImage>
        <Heading1>Blog</Heading1>
        <SearchBarWrapper>
          <SearchBar placeholder="Search" />
        </SearchBarWrapper>
      </HeroSectionBackgroundImage>
    </div>
  );
}
