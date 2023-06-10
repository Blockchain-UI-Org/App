import * as React from "react";
import { SelectableChipTabsFlexContainerWrapper } from "./style";
import { Chip } from "../../atoms/Chip";
import { FlexVariant } from "@site/src/shared/style";

export interface ISelectableChipTabsProps {
  items: string[];
  onChange: (value: string) => void;
  value: string;
  justifyContent?: FlexVariant;
}

export function SelectableChipTabs({ items, value, onChange, justifyContent }: ISelectableChipTabsProps) {
  return (
    <SelectableChipTabsFlexContainerWrapper justifyContent={justifyContent}>
      {items.map((option, index) => (
        <Chip key={index} label={option} selected={option === value} onClick={() => onChange(option)} />
      ))}
    </SelectableChipTabsFlexContainerWrapper>
  );
}
