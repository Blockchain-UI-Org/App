import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <Container>
      <LeftSection>BUI</LeftSection>
      <RightSection>
        <MenuItem>Home</MenuItem>
        <MenuItem>Components</MenuItem>
        <MenuItem>Documentation</MenuItem>
        <MenuItem>Pricing</MenuItem>
        <MenuItem>
          <LoginButton>Login</LoginButton>
        </MenuItem>
      </RightSection>
    </Container>
  );
};
export default Menu;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  height: 40px;
  padding: 0 30px 0 30px;
  margin: 10px 0;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  font-size: 26px;
  color: #2d3766;
  letter-spacing: -1.5px;
  font-style: normal;
  font-weight: 400;
  padding-left: 120px;
`;

const RightSection = styled.div`
  font-style: normal;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 650px;
`;

const MenuItem = styled.div`
  color: #475569;
  line-height: 17px;
  text-align: right;
  letter-spacing: -0.01em;
  font-size: 14px;
  color: #2d3766;
`;

const LoginButton = styled.div`
  font-style: normal;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 44px;
  border: 1px solid #2d3766;
  border-radius: 50px;
`;
