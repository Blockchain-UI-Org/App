import * as React from "react";
import { BlogCardFull } from "../BlogCard/BlogCardFull";
import { ResponsiveGrid } from "@site/src/shared/style";
import { BlogCardSmall } from "../BlogCard/BlogCardSmall";
import { BLOG_ITEMS } from "@site/src/_mock/blogItems";

export interface IBlogItemsSectionProps {}

export function BlogItemsSection(props: IBlogItemsSectionProps) {
  return (
    <div className="container">
      <BlogCardFull
        {...BLOG_ITEMS[0]}
      />
      <ResponsiveGrid marginTop>
        {BLOG_ITEMS.slice(1).map((blogItem, index) => (
          <BlogCardSmall {...blogItem} key={index} />
        ))}
      </ResponsiveGrid>
    </div>
  );
}
