import { ComponentProps } from "react";
import styled, { css } from "styled-components";

export const TableContainer = styled.div<{ maxWidth?: number }>`
  display: block;
  white-space: nowrap;
  width: 100%;
  overflow-x: auto hidden;
  ${({ maxWidth }) => css({ maxWidth })}
`;

export const THead = styled.thead`
  border-bottom: 1px solid #e5e7f3;
`;
export const Th = styled.th<{ color?: string }>`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  text-align: start;
  padding: 15px 26px;
  ${({ color }) => css({ color })}
`;
export const Table = styled.table<{ minWidth?: number; variant?: "light" | "dark" }>`
  width: 100%;
  border-collapse: collapse;
  ${({ minWidth, variant = "light" }) => {
    const DarkVariant = css`
      thead {
        background-color: #060817;
        color: #fff;
      }
      th {
        font-weight: 500;
      }
    `;
    const LightVariant = css`
      thead {
        background-color: #fff;
        color: rgb(143, 145, 160);
      }
    `;
 
    return css`
      ${variant === "dark" ? DarkVariant : LightVariant}
      ${css({ minWidth })}
    `;
  }}
`;
export const Tbody = styled.tbody`
  tr:hover {
    background-color: #f4f5fa;
  }
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #e5e7f3;
  transition: all 0.3s linear;
`;

const TdCell = styled.td`
  font-size: 15px;
  vertical-align: middle;
  line-height: 12px;
  font-weight: 400;
`;
const TdInner = styled.div`
  display: flex;
  align-items: center;
  min-height: 72px;
  padding: 15px 26px;
  img,
  svg {
    margin-right: 5px;
  }
`;

export const Td = (props: ComponentProps<typeof TdCell>) => {
  const { children, ...rest } = props;
  return (
    <TdCell {...props}>
      <TdInner>{children}</TdInner>
    </TdCell>
  );
};
