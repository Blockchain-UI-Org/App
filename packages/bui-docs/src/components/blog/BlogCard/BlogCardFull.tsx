import * as React from "react";
import { BlogCardContent, BlogCardImage } from "./style";
import { Heading2, Heading3, Heading4 } from "../../atoms/Typography";
import { GradientAccentText, ResponsiveGrid } from "@site/src/shared/style";
import { AuthorCard } from "./AuthorCard";

export interface IBlogCardFullProps {
  image: string;
  type: string;
  title: string;
  description: string;
  authorImage: string;
  authorName: string;
  date: string;
}

export function BlogCardFull({ image, type, title, description, authorImage, authorName, date }: IBlogCardFullProps) {
  return (
    <ResponsiveGrid>
      <BlogCardImage src={image} />
      <BlogCardContent>
        <Heading3><GradientAccentText>{type}</GradientAccentText></Heading3>
        <Heading2>{title}</Heading2>
        <Heading4 opacity="0.8">{description}</Heading4>
        <AuthorCard authorImage={authorImage} authorName={authorName} date={date} />
      </BlogCardContent>
    </ResponsiveGrid>
  );
}
