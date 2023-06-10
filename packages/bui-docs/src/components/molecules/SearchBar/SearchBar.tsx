import * as React from "react";
import { SearchBarContainer } from "./style";
import { useTheme as useStyledTheme } from "styled-components";
import { SearchIcon } from "../../atoms/Icons/SearchIcon";

export interface ISearchBarProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export function SearchBar(props: ISearchBarProps) {
  const theme = useStyledTheme();

  return (
    <SearchBarContainer>
      <SearchIcon color={theme.primary.text} />
      <input {...props} />
    </SearchBarContainer>
  );
}
