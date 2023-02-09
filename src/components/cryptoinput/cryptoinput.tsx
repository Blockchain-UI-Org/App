import { Typography } from "@mui/material";
import { CryptoIcon } from "components/icon/icon";
import { useMemo } from "react";
import styled, { css } from "styled-components";

const CryptInputWrapper = styled.div`
  padding: 24px;
  border-radius: 10px;
  background-color: #f4f5fa;
  display: inline-flex;
  min-width: 300px;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input<{ width?: string }>`
  border-width: 0;
  background-color: transparent;
  outline: none;
  line-height: 24px;
  font-size: 24px;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const calcWidth = (val: string | number, minWidth: number = 2, maxWidth: number = 50) => {
  const newWidth = Math.min(Math.max(val.toString().length, minWidth), maxWidth) + "ch";
  return newWidth;
};
export const CryptoInput = ({
  value = "",
  onChange,
}: {
  value?: number | string;
  onChange: (val: string | number) => void;
}) => {
  const width = useMemo(() => {
    return calcWidth(value, 4, 20);
  }, [value]);
  return (
    <CryptInputWrapper>
      <IconWrapper>
        <CryptoIcon cryptoSymbol="DAI" />
      </IconWrapper>
      <InputWrapper>
        <Typography fontSize={10} color="#8F91A0">
          You Pay
        </Typography>
        <Box>
          <Input
            value={value}
            onChange={(e) => {
              const val = e.target.value;
              onChange(val);
            }}
            width={width}
            type="number"
            placeholder="0.0"
          />
          <Typography lineHeight={1} fontSize={22}>
            DAI
          </Typography>
        </Box>
      </InputWrapper>
      <PriceWrapper>
        <Typography fontSize={10} lineHeight="24px" color="#8F91A0">
          $(0.0)
        </Typography>
      </PriceWrapper>
    </CryptInputWrapper>
  );
};
