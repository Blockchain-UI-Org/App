import { FC } from 'react';
import styled from 'styled-components';
import { colors } from 'theme';
const { blue100, success100, yellow100, error100, black, success500, warning500, error500 } =
  colors;

type TagType = 'neutral' | 'positive' | 'warning' | 'error';

const BackgroundColor: { [key in TagType]: string } = {
  neutral: blue100,
  positive: success100,
  warning: yellow100,
  error: error100,
};

const TextColor: { [key in TagType]: string } = {
  neutral: black,
  positive: success500,
  warning: warning500,
  error: error500,
};

type TagSize = 'small' | 'large';

const Padding: { [key in TagSize]: string } = {
  small: '2px 12px',
  large: '4px 16px',
};

const FontSize: { [key in TagSize]: string } = {
  small: '14px',
  large: '16px',
};

const LineHeight: { [key in TagSize]: string } = {
  small: '20px',
  large: '24px',
};

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  type: TagType;
  size: TagSize;
}

export const Tag: FC<TagProps> = ({ type, size, children, ...props }) => {
  return (
    <TagWrapper type={type} size={size} {...props}>
      <Span size={size}>{children}</Span>
    </TagWrapper>
  );
};

const TagWrapper = styled.span<{ type: TagType; size: TagSize }>`
  background: ${({ type }) => BackgroundColor[type]};
  color: ${({ type }) => TextColor[type]};
  border-radius: 39px;
  padding: ${({ size }) => Padding[size]};
  height: 1.5rem;
`;

const Span = styled.span<{ size: TagSize }>`
  font-weight: 700;
  font-style: normal;
  font-size: ${({ size }) => FontSize[size]};
  line-height: ${({ size }) => LineHeight[size]};
`;
