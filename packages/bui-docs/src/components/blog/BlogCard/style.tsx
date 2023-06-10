import styled from "styled-components";

export const BlogCardFullContainer = styled.div`
  display: grid;
  grid-column: 2;
  gap: 90px;
  & > * {
    flex: 1;
  }
`;

export const BlogCardSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const BlogCardImage = styled.img<{height?: string}>`
    width: 100%;
    max-height: 500px;
    border-radius: 40px;
    height: ${({height}) => height || "auto"};
    overflow: hidden;
`;

export const BlogCardContent = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ fullWidth = false }) => (fullWidth ? "30px" : "25px")};
`;

export const AuthorCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  & .author-details {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const AuthorAvatar = styled.img`
  border-radius: 100%;
  width: 80px;
  height: 80px;
`;
