import Link from "@mui/material/Link";
import Iconify from "components/Iconify";
import SocialsButton from "components/SocialsButton";
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
          <Link
            href="https://www.chromatic.com/library?appId=63a670b1ce0472f1c60a3f59&branch=main"
            target="_blank"
            rel="noreferrer noopener"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Library
          </Link>
        </MenuItem>
        <MenuItem>Documentation</MenuItem>
        <Link key={"twitter_link"} href={"https://twitter.com/ui_blockchain"} rel="noreferrer noopener" target="_blank">
          <Iconify icon="eva:twitter-fill" sx={{ width: 22, height: 22 }} color="#00AAEC" />
        </Link>
        <Link
          key={"github_link"}
          href={"https://github.com/Blockchain-UI-Org"}
          style={{ marginLeft: "10px" }}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Iconify icon="mdi:github" sx={{ width: 22, height: 22 }} color="#161B22"></Iconify>
        </Link>
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
  background-color: #fbfbfd;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: 50px;
  opacity: 0.97;
  z-index:3;


  overflow: hidden;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width *
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

// const LoginButton = styled.div`
//   font-style: normal;
//   font-weight: 700;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   width: 108px;
//   height: 44px;
//   border: 1px solid #2d3766;
//   border-radius: 50px;

//   :hover {
//     border: 2px solid #2d3766;
//   }
// `;
