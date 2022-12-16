import React, { FC, useState } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import Image from "../../image/image";
import { colorMode, ThemeColor } from "../../theme/colors";



interface CreditCardType {
  balance?: string;
  name?: string;
  expDate?: string;
  cvv?: string;
  themeColor?: ThemeColor;
}

const CreditCard: FC<CreditCardType> = ({
  balance = "$20,000.00",
  name = "Your Name",
  expDate = "01/01",
  cvv = "123",
  themeColor = "default",
}) => {
  const [showBalance, setShowBalance] = useState(true);
  const [showCvv, setShowCvv] = useState(false);


  return (
    <CardItemStyle $colorMode={colorMode[themeColor]}>
      <div>
        <Title>Balance</Title>
        <BalanceWrapper onClick={() => setShowBalance(!showBalance)}>
          <div style={{ marginRight: "10px" }}>
            {showBalance ? balance : "*******"}
          </div>
          <Icon
            width={20}
            icon={showBalance ? "eva:eye-fill" : "eva:eye-off-fill"}
          />
        </BalanceWrapper>
      </div>
      <CardNumber>
        <img width={40} alt="credit-card" src="/assets/Mastercard-logo.svg" />
        <Info style={{ marginLeft: "10px" }}>**** **** **** 1234</Info>
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
              <Icon
                width={20}
                icon={showCvv ? "eva:eye-fill" : "eva:eye-off-fill"}
              />
            </Cvv>
          </Info>
        </div>
      </OtherDetails>
    </CardItemStyle>
  );
};

export default CreditCard;

interface CardStyle {
  $colorMode?: Record<string, string>;
}

const CardItemStyle = styled.div<CardStyle>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("/assets/bg_card.png");
  background-size: cover;
  background: ${({ $colorMode }) => $colorMode?.background};
  height: 300px;
  width: 525px;
  color: ${({ $colorMode }) => $colorMode?.color};
  border-radius: 20px;
  padding: 20px;
  font-family: Public Sans;
  opacity: 0.95;
`;

const Title = styled.div`
  color: #fffff;
  opacity: 0.7;
`;

const Subtitle = styled.div`
  color: #fffff;
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
