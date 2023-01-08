import React from "react";
import Menu from "./component/menu";
import styled from "styled-components";

import Landing from "./pages/landing";

function App() {
  return (
    <Wrapper>
      {/* <Menu></Menu> */}
      <Landing />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;
