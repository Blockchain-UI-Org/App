import * as React from "react";
import { AuthorAvatar, AuthorCardContainer } from "./style";
import { Heading5, Heading6 } from "../../atoms/Typography";

export interface IAuthorCardProps {
  authorName: string;
  authorImage: string;
  date: string;
}

export function AuthorCard({ authorImage, authorName, date }: IAuthorCardProps) {
  return (
    <AuthorCardContainer>
      <AuthorAvatar src={authorImage} />
      <div className="author-details">
        <Heading5 weight="semibold">{authorName}</Heading5>
        <Heading6>{date}</Heading6>
      </div>
    </AuthorCardContainer>
  );
}
