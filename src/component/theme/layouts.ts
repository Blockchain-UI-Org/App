import styled from 'styled-components';
import type { CSSProperties } from 'react';

interface StackProps {
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  inset?: string;
  gap?: string;
}

const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  padding: ${props => props.inset || '0'};
  > * + * {
    margin-top: ${props => props.gap || '1.5rem'};
  }
`;

interface InlineProps {
  width?: CSSProperties['width'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  inset?: string;
  grow?: boolean;
  gap?: string;
}

const Inline = styled.div<InlineProps>`
  width: ${props => props.width};
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  padding: ${props => props.inset || '0'};
  > * {
    flex-grow: ${props => (props.grow ? 1 : 0)};
  }
  > * + * {
    margin-left: ${props => props.gap || '1.5rem'};
  }
`;

const Responsive = styled(Inline)`
  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    > * + * {
      margin-left: 0;
      margin-top: 1rem;
    }
  `};
`;

export type { StackProps, InlineProps };
export { Stack, Inline, Responsive };
