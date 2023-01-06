import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <Wrapper>
      {" "}
      Blockchain-UI. A Component Library Built For Blockchain Applications.
    </Wrapper>
  );
};

export default Menu;

const Wrapper = styled.div`
  width: 100%;
  height: 30px;
  color: #d1d1d0;
  background-color: #121310;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
