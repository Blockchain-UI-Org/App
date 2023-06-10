import { MainContainer } from "@site/src/shared/style";
import * as React from "react";
import { HeroSection } from "./HeroSection";
import { BlogItemsSection } from "./BlogItemsSection/BlogItemsSection";
import { BlogCategoryTabs } from "./BlogCategoryTabs";

export interface IBlogProps {}

const categories = ["All", "NFTs", "Finance", "Charts", "Others"];

export function Blog(props: IBlogProps) {
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

  return (
    <MainContainer>
      <section className="app-section">
        <HeroSection />
      </section>
      <section className="app-section">
        <BlogCategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </section>
      <section className="app-section">
        <BlogItemsSection />
      </section>
    </MainContainer>
  );
}
