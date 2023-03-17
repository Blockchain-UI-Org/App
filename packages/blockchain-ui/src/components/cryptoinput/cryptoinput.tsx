import { Typography } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { formatNumber } from "blockchain-ui/utils";
import { useTheme } from "blockchain-ui/theme";
import { CryptoListModal, IBasicToken } from "./CryptoListModal";
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
  transition: all 0.3s linear;
  &:hover {
    background-color: #e8e8e8;
    border-radius: 10px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
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
  width: 100%;

  ${({ width, align }) => {
    let styles = ``;
    if (width) {
      styles += ` width: ${width};`;
    }
    if (align === "right") {
      styles += `text-align: right;
      margin-right: 5px;
      `;
    }
    return styles;
  }}
`;

const PriceWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 24px;
`;

const calcWidth = (val: string | number, minWidth: number = 2, maxWidth: number = 50) => {
  const newWidth = Math.min(Math.max(val.toString().length, minWidth), maxWidth) + "ch";
  return newWidth;
};

export type ICryptoInputProps = {
  selectedToken: IBasicToken;

  value?: number | string;

  listOfCurrencies: IBasicToken[];

  price: number | string;

  align?: "left" | "right";

  onSelectToken: (selectedToken: IBasicToken) => void;

  onChange: (val: string | number) => void;
};

const formatVal = (input: string | number, limitOfDecimals: number) => {
  const num = input.toString();
  if (num.toString().includes(".")) {
    const [first, second] = num.split(".");
    if (second.length > limitOfDecimals) {
      return first + "." + second.slice(0, limitOfDecimals);
    }
    return num;
  } else {
    return num;
  }
};

export const CryptoInput = ({
  value = "",
  price,
  onChange,
  listOfCurrencies,
  onSelectToken,
  selectedToken,
  align = "left",
}: ICryptoInputProps) => {
  const [maxWidth, setMaxWidth] = useState<string>();
  const regex = "^[0-9]*[.,]?[0-9]*$";
  const ref = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useTheme();

  const width = useMemo(() => {
    if (!maxWidth || align === "right") {
      return undefined;
    }

    return calcWidth(value, 4);
  }, [value, maxWidth, align]);

  const Icon = selectedToken?.icon;
  useEffect(() => {
    setMaxWidth(getComputedStyle(ref.current!).width);
  }, []);

  return (
    <CryptInputWrapper>
      <IconWrapper onClick={() => setIsModalOpen(true)}>
        {Icon && <Icon style={{ width: 35 }} />} <BiChevronDown color={theme.palette.buiColors.grey500} size={24} />
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
        <Input
          ref={ref}
          value={formatVal(value, selectedToken?.decimals || 12)}
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
        <Typography style={{ textTransform: "uppercase" }} lineHeight={1} fontSize={22}>
          {selectedToken.symbol}
        </Typography>
      </InputWrapper>
      <PriceWrapper>
        <Typography fontSize={10} lineHeight="24px" color={theme.palette.buiColors.grey500}>
          $({value ? formatNumber(parseFloat(value as string) * parseFloat(price as string)) : 0})
        </Typography>
      </PriceWrapper>
    </CryptInputWrapper>
  );
};
