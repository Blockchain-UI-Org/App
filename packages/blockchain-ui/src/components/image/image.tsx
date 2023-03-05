import { FC, ImgHTMLAttributes, useEffect, useRef, useState } from "react";
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

const Image: FC<ImageProps> = ({ name, src, iconType = "regular", ...props }) => {
  const [render, setRender] = useState<boolean>(false);
  const CompRef = useRef<any>(src);

  const setImageSrc = (arg: any) => {
    CompRef.current = arg;
    setRender(old => !old);
  }
  const Comp = CompRef.current;

  useEffect(() => {
    if (src) {
      setImageSrc(src);
    } else {
      const imageName = name in availableImages.default ? name : "fallback";
      //@ts-ignore
      setImageSrc(availableImages.default[imageName]);
    }
  }, [iconType, name, src]);
  if (typeof Comp === "undefined" || typeof Comp === "string") {

    return <StyledImage src={Comp} data-testid={`${name}-image`} alt={`${name}-image`} {...props} />;
  }

  return <Comp />;
};

export const RoundImage = styled(Image)`
  border-radius: 50%;
`;

export default Image;
