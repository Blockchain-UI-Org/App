import { Typography } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { formatNumber } from "blockchain-ui/utils";
import { useTheme, withTheme } from "blockchain-ui/theme";
import { CryptoListModal, IBasicToken } from "./CryptoListModal";
import { ChevronDown } from "../static/images";
import { Button } from "../button";
const CryptInputWrapper = styled.div`
  padding: 18px 24px;
  border-radius: 10px;
  background-color: #f4f5fa;
  display: inline-flex;
  width: 400px;
  max-width: 100%;
  position: relative;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;
  transition: all 0.3s linear;
  &:hover {
    background-color: #e8e8e8;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  max-width: 100%;
  position: relative;
  flex: 1;
  align-items: center;
  line-height: 22px;
  font-size: 22px;
  ${withTheme(({ theme }) => {
    return css`
      font-family: ${theme.typography.common.fontFamily};
    `;
  })}
`;

const Input = styled.input<{ align: ICryptoInputProps["align"] }>`
  border-width: 0;
  background-color: transparent;
  outline: none;
  line-height: inherit;
  font-size: inherit;
  font-family: inherit;
  width: 100%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-51%);
  ${({ align }) => {
    let styles = ``;
    if (align === "right") {
      styles += `text-align: right;
      position:relative;
      left: initial;
      top: initial;
      transform: initial;
      margin-right: 5px;
      `;
    }
    return styles;
  }}
`;

const HiddenSpan = styled.span`
  padding: 0 2px;
  min-width: 40px;
  line-height: inherit;
  font-size: inherit;
  font-family: inherit;
  visibility: hidden;
`;

const PriceWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 24px;
  display: flex;
  align-items: center;
`;

const calcWidth = (val: string | number, minWidth: number = 2, maxWidth: number = 50) => {
  const newWidth = Math.min(Math.max(val.toString().length, minWidth), maxWidth) + "ch";
  return newWidth;
};

export type ICryptoInputProps = {
  selectedToken: IBasicToken;

  value?: number | string;

  listOfCurrencies: IBasicToken[];

  price?: number | string;

  balance?: number | string;

  align?: "left" | "right";

  onSelectToken: (selectedToken: IBasicToken) => void;

  onChange: (val: string | number) => void;
};

const formatVal = (input: string | number, prevVal: string | number, limitOfDecimals = 12, totalLimit = 16) => {
  const num = input.toString();
  let result = num;
  if (num.toString().includes(".")) {
    const [first, second] = num.split(".");
    if (second.length > limitOfDecimals) {
      result = first + "." + second.slice(0, limitOfDecimals);
    }
  }
  if (result.length > 17) {
    return prevVal;
  }
  return result;
};

export const CryptoInput = ({
  value = "",
  price,
  balance,
  onChange,
  listOfCurrencies,
  onSelectToken,
  selectedToken,
  align = "left",
}: ICryptoInputProps) => {
  const regex = "^[0-9]*[.,]?[0-9]*$";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useTheme();

  const Icon = selectedToken?.icon;

  return (
    <CryptInputWrapper>
      <IconWrapper onClick={() => setIsModalOpen(true)}>
        {Icon && <Icon data-testid={selectedToken.name} style={{ width: 35, marginRight: 10 }} />}{" "}
        <ChevronDown color={theme.palette.buiColors.grey500} width={12} />
      </IconWrapper>
      {isModalOpen && (
        <CryptoListModal
          selectedToken={selectedToken}
          tokens={listOfCurrencies}
          onSelect={onSelectToken}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <InputWrapper>
        {/*Purpose of span is to enable autogrowing visually */}
        {align === "left" && <HiddenSpan aria-hidden="true">{value}</HiddenSpan>}
        <Input
          data-testid="input"
          value={formatVal(value, value, selectedToken?.decimals)}
          align={align}
          onChange={(e) => {
            const val = e.target.value;
            if (new RegExp(regex, "g").test(val)) {
              onChange(formatVal(val, value, selectedToken?.decimals));
            }
          }}
          autoCorrect="off"
          autoComplete="off"
          inputMode="decimal"
          pattern={regex}
          maxLength={79}
          minLength={1}
          type="text"
          placeholder="0.0"
        />
        <Typography style={{ textTransform: "uppercase" }} lineHeight={1} fontSize={22}>
          {selectedToken.symbol}
        </Typography>
      </InputWrapper>
      <PriceWrapper>
        <Typography fontSize={10} lineHeight="24px" color={theme.palette.buiColors.grey500}>
          {balance ? (
            formatNumber(parseFloat(balance as string))
          ) : (
            <> $({value ? formatNumber(parseFloat(value as string) * parseFloat(price as string)) : 0})</>
          )}
        </Typography>
        {balance && (
          <Button
            data-testid="max-btn"
            onClick={() => onChange(balance)}
            marginLeft={5}
            padding={"2px 5px"}
            fontSize="10px"
            lineHeight={1.3}
            variant="outlined"
            color="info"
            size="small"
            label="Max"
          ></Button>
        )}
      </PriceWrapper>
    </CryptInputWrapper>
  );
};
