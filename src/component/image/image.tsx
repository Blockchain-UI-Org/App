import { FC, ImgHTMLAttributes, useEffect, useState } from "react";
import styled from "styled-components";
import * as availableImages from "../static/images";


export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  name: string;
  src?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  iconType?: "crypto" | "regular";
}

interface StyledImageProps {
  bgColor?: string;
}
const StyledImage = styled.img<StyledImageProps>`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  background-color: ${({ bgColor }) => bgColor};
`;

const Image: FC<ImageProps> = ({
  name,
  src,
  iconType = "regular",
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState<string>();

  useEffect(() => {
    if (src) {
      setImageSrc(src);
    } else {
      const imageName = name in availableImages.default ? name : "fallback";
      //@ts-ignore
      setImageSrc(availableImages.default[imageName]);
    }
  }, [iconType, name, src]);

  return (
    <StyledImage
      src={imageSrc}
      data-testid={`${name}-image`}
      alt={`${name}-image`}
      {...props}
    />
  );
};

export const RoundImage = styled(Image)`
  border-radius: 50%;
`;

export default Image;
