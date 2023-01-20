import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <MenuItem>
          <div className="homeButton">BUI</div>
        </MenuItem>
        <MenuItem>
          <a
            href="https://www.chromatic.com/library?appId=63a670b1ce0472f1c60a3f59&branch=main"
            target="_blank"
            rel="noreferrer noopener"
            style={{ textDecoration: "none" }}
          >
            Library
          </a>
        </MenuItem>
        <MenuItem>Documentation</MenuItem>
        {/* <MenuItem>Pricing</MenuItem> */}
        {/* <MenuItem>
          <LoginButton>Login</LoginButton>
        </MenuItem> */}
      </Wrapper>
    </Container>
  );
};
export default Menu;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: 40px;
  margin: 10px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 26px;
  color: #2d3766;
  letter-spacing: -1.5px;
  font-style: normal;
  font-weight: 400;

  .homeButton {
    font-size: 20px;
    :hover {
      cursor: pointer;
    }
  }
`;

const MenuItem = styled.div`
  color: #475569;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.01em;
  font-size: 14px;
  color: #2d3766;
  width: 130px;

  font-style: normal;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
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

  :hover {
    border: 2px solid #2d3766;
  }
`;
