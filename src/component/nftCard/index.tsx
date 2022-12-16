import React, { FC } from "react";
import styled from "styled-components";

interface NftCardProps {
  src?: string;
  size?: string;
}

const NftCard: FC<NftCardProps> = ({ src, size }) => {
  return (
    <Container>
      <Image $src={src} />
      <Details>Description</Details>
    </Container>
  );
};

export default NftCard;

const Container = styled.div`
  color: white;
  width: 250px;
  height: 400px;
  background: #212b36;
  border-radius: 15px;
  overflow: hidden;
  margin: 10px 15px;
`;

interface ImageProps {
  $src?: string;
}

const Image = styled.div<ImageProps>`
  background-image: ${({ $src }) => $src};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 80%;
`;

const Details = styled.div`
  padding: 10px;
`;
