import { useTheme, withTheme } from "blockchain-ui/theme";
import { FC } from "react";
import styled, { css } from "styled-components";
import { Paragraph, Subtitle } from "../typography";

export interface NftCardProps {
  src?: string;
  maxWidth?: string | number;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  title: string;
  price: string;
  lastPrice?: string;
}

const NftCard: FC<NftCardProps> = ({ src, title, price, onClick, lastPrice, maxWidth = "300px" }) => {
  const theme = useTheme();

  return (
    <Container onClick={onClick} style={{ maxWidth, paddingBottom: !lastPrice ? 25 : 4 }}>
      <ImageWrapper>
        <Image data-testid="nft-img" className="nft-img" $src={src} />
      </ImageWrapper>
      <Details>
        <Subtitle data-testid="title" fontWeight={800} variant="subtitle2">
          {title}
        </Subtitle>
        <Subtitle data-testid="price" variant="subtitle1">{price}</Subtitle>
        {lastPrice && (
          <Paragraph data-testid="lastprice" variant="body2" fontWeight={800} color={theme.palette.buiColors.grey600}>
            Last Sale: {lastPrice}
          </Paragraph>
        )}
      </Details>
    </Container>
  );
};

export default NftCard;

const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 80%;
  position: relative;
  overflow: hidden;
`;

const Image = styled.div<ImageProps>`
  background-image: ${({ $src }) => `url("${$src}")`};
  background-size: cover;
  background-position: center;
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  transition: all 0.3s linear;
`;
const Container = styled.div`
  cursor: pointer;
  width: 100%;
  overflow: hidden;
  ${withTheme(
    ({ theme }) => css`
      box-shadow: ${theme.shadows.depth5};
    `
  )}
  border-radius: 15px;
  margin: 10px 15px;
  transition: all 0.1s ease 0s;
  &:hover {
    & .nft-img {
      transform: scale(1.1);
    }
  }
`;

interface ImageProps {
  $src?: string;
}

const Details = styled.div`
  padding: 15px;
  :hover {
    cursor: pointer;
  }
`;
