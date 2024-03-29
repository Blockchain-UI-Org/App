import { FC, useState } from "react";
import { Icon } from "@iconify/react";
import styled, { css } from "styled-components";
import { withTheme, ThemeInterface } from "blockchain-ui/theme";
import { CryptoIcon } from "../../icon/icon";
import { CryptoSymbols } from "../../static/types";

interface CreditCardType {
  balance?: string;
  name?: string;
  expDate?: string;
  cvv?: string;
  themeColor?: keyof ThemeInterface["components"]["CreditCard"]["variants"];
  currency?: CryptoSymbols;
}

const CreditCard: FC<CreditCardType> = ({
  balance = "20,000.00",
  name = "Your Name",
  expDate = "01/01",
  cvv = "123",
  themeColor = "default",
  currency,
}) => {
  const [showBalance, setShowBalance] = useState(true);
  const [showCvv, setShowCvv] = useState(false);

  return (
    <CardItemStyle $colorMode={themeColor}>
      <div>
        <Title>Balance</Title>
        <BalanceWrapper onClick={() => setShowBalance(!showBalance)}>
          <div style={{ marginRight: "10px" }}>
            {showBalance ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                {currency ? <CryptoIcon cryptoSymbol={currency} /> : "$"}{" "}
                <div style={{ marginLeft: "10px" }}>{balance}</div>
              </div>
            ) : (
              "*******"
            )}
          </div>
          <Icon width={20} icon={showBalance ? "eva:eye-fill" : "eva:eye-off-fill"} />
        </BalanceWrapper>
      </div>
      <CardNumber>
        <img width={40} alt="credit-card" src="/assets/Mastercard-logo.svg" />
        <Info style={{ marginLeft: "10px" }}>**** **** **** 9234</Info>
      </CardNumber>
      <OtherDetails>
        <div>
          <Subtitle>Name</Subtitle>
          <Info>{name}</Info>
        </div>
        <div>
          <Subtitle>Exp Date</Subtitle>
          <Info>{expDate}</Info>
        </div>
        <div>
          <Subtitle>CVV</Subtitle>
          <Info>
            <div> {showCvv ? cvv : "***"}</div>
            <Cvv onClick={() => setShowCvv(!showCvv)}>
              <Icon width={20} icon={showCvv ? "eva:eye-fill" : "eva:eye-off-fill"} />
            </Cvv>
          </Info>
        </div>
      </OtherDetails>
    </CardItemStyle>
  );
};

export default CreditCard;

interface CardStyle {
  $colorMode: keyof ThemeInterface["components"]["CreditCard"]["variants"];
}

const CardItemStyle = styled.div<CardStyle>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("/assets/carbon_fiber1.webp");
  background-size: cover;
  ${withTheme(({ $colorMode, theme }) =>
    $colorMode === "default"
      ? css``
      : css`
          background: ${theme.components.CreditCard.variants[$colorMode].background};
        `
  )};
  height: 300px;
  width: 525px;
  color: ${withTheme(({ $colorMode, theme }) => theme.components.CreditCard.variants[$colorMode].color)};
  border-radius: 20px;
  padding: 20px;
  font-family: Public Sans;
  opacity: 0.95;
`;

const Title = styled.div`
  opacity: 0.7;
`;

const Subtitle = styled.div`
  opacity: 0.7;
  font-weight: thin;
  font-size: 15px;
  margin-bottom: 5px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
`;

const Cvv = styled.div`
  :hover {
    cursor: pointer;
  }
`;

const BalanceWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 20px;
  margin: 10px 0;
  font-size: 30px;
  :hover {
    cursor: pointer;
  }
`;

const CardNumber = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  font-size: 25px;
  align-items: center;
`;

const OtherDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  font-size: 25px;
  align-items: center;
`;
