import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from 'theme';


export interface TabProps {
  title: string | JSX.Element;
  isActive?: boolean;
  onClick: () => void;
  position: number;
}

export const Tab: FunctionComponent<TabProps> = ({
  title,
  isActive = false,
  onClick,
  position,
}) => {
  return (
    <TabWrapper
      isText={typeof title === 'string'}
      position={position}
      onClick={onClick}
      isActive={isActive}
    >
      {title}
    </TabWrapper>
  );
};

const TabWrapper = styled.div<{
  isActive: boolean;
  position: number;
  isText: boolean;
}>`
  box-sizing: border-box;
  height: 48px;
  padding: 8px;
  border-radius: 100px;
  min-width: 48px;
  width: ${({ isText }) => (isText ? '204px' : 'fit-content')};
  color: ${withTheme(({ isActive, theme }) => (isActive ? theme.palette.common.black : theme.palette.grey[700]))};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  * {
    z-index: 2;
  }

  ${({ isActive, position }) => {
    return (
      isActive &&
      css`
        & ~ .glider {
          transform: translateX(${position * 100}%);
        }
      `
    );
  }}

  &:hover {
    cursor: pointer;
  }
`;
