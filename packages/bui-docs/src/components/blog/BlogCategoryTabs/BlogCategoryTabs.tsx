import * as React from "react";
import { SelectableChipTabs } from "../../molecules/SelectableChipTabs";

export interface IBlogCategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export function BlogCategoryTabs({ categories, selectedCategory, setSelectedCategory }: IBlogCategoryTabsProps) {
  return (
    <div className="container">
      <SelectableChipTabs
        items={categories}
        value={selectedCategory}
        onChange={(value) => setSelectedCategory(value)}
        justifyContent="center"
      />
    </div>
  );
}
