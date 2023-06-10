import * as React from "react";
import { BlogCardContent, BlogCardImage, BlogCardSmallContainer } from "./style";
import { Heading2, Heading3, Heading4, Heading5 } from "../../atoms/Typography";
import { AuthorCard } from "./AuthorCard";
import { GradientAccentText } from "@site/src/shared/style";

export interface IBlogCardSmallProps {
  image: string;
  type: string;
  title: string;
  description: string;
  authorImage: string;
  authorName: string;
  date: string;
}

export function BlogCardSmall({ image, type, title, description, authorImage, authorName, date }: IBlogCardSmallProps) {
  return (
    <BlogCardSmallContainer>
      <BlogCardImage src={image} alt="BlogImage" height="320px" />
      <BlogCardContent>
        <Heading4><GradientAccentText>{type}</GradientAccentText></Heading4>
        <Heading3>{title}</Heading3>
        <Heading5 opacity="0.8">{description}</Heading5>
        <AuthorCard authorImage={authorImage} authorName={authorName} date={date} />
      </BlogCardContent>
    </BlogCardSmallContainer>
  );
}
