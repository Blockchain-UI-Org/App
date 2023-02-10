import { Typography } from "@mui/material";
import { CryptoIcon } from "components/icon/icon";
import { useEffect, useMemo, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { CryptoSymbols } from "components/static/types";
import { formatNumber } from "utils";
const CryptInputWrapper = styled.div`
  padding: 24px;
  border-radius: 10px;
  background-color: #f4f5fa;
  display: inline-flex;
  /* min-width: 300px; */
  position: relative;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  padding: 5px;
  transition: all 0.3s linear;
  &:hover {
    background-color: #e8e8e8;
    border-radius: 10px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  width: 300px;
  max-width: 100%;
  flex: 1;
  align-items: center;
`;

const Input = styled.input<{ width?: string; align: ICryptoInputProps["align"] }>`
  border-width: 0;
  background-color: transparent;
  outline: none;
  line-height: 24px;
  font-size: 24px;
  max-width: 100%;
  margin-right: 5px;
  ${({ width, align }) => {
    let styles = ``;
    if (width) {
      styles += ` width: ${width};`;
    }
    if (align === "right") {
      styles += `text-align: right;`;
    }

    return styles;
  }}
`;

const PriceWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 24px;
`;

const calcWidth = (val: string | number, minWidth: number = 2, maxWidth: number = 50) => {
  const newWidth = Math.min(Math.max(val.toString().length, minWidth), maxWidth) + "ch";
  return newWidth;
};
export type ICryptoInputProps = {
  value?: number | string;
  symbol: CryptoSymbols;
  price: number | string;
  align?: "left" | "right";
  onChange: (val: string | number) => void;
};
export const CryptoInput = ({ value = "", price, onChange, symbol, align = "left" }: ICryptoInputProps) => {
  const [maxWidth, setMaxWidth] = useState<string>();
  const regex = "^[0-9]*[.,]?[0-9]*$";
  const ref = useRef<HTMLInputElement>(null);

  const width = useMemo(() => {
    if (!maxWidth || align === "right") {
      return undefined;
    }

    return calcWidth(value, 4);
  }, [value, maxWidth, align]);

  useEffect(() => {
    setMaxWidth(getComputedStyle(ref.current!).width);
  }, []);
  return (
    <CryptInputWrapper>
      <IconWrapper>
        <CryptoIcon cryptoSymbol={symbol} /> <BiChevronDown color="#8F91A0" size={24} />
      </IconWrapper>
      <InputWrapper>
        <Input
          ref={ref}
          value={value}
          align={align}
          onChange={(e) => {
            const val = e.target.value;
            if (new RegExp(regex, "g").test(val)) {
              onChange(val);
            }
          }}
          width={width}
          autoCorrect="off"
          autoComplete="off"
          inputMode="decimal"
          pattern={regex}
          maxLength={79}
          minLength={1}
          type="text"
          placeholder="0.0"
        />
        <Typography lineHeight={1} fontSize={22}>
          {symbol}
        </Typography>
      </InputWrapper>
      <PriceWrapper>
        <Typography fontSize={10} lineHeight="24px" color="#8F91A0">
          $({value ? formatNumber(parseFloat(value as string) * parseFloat(price as string)): 0})
        </Typography>
      </PriceWrapper>
    </CryptInputWrapper>
  );
};
