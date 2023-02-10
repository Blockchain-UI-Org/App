import React from "react";
import styled from "styled-components";
import Landing from "./pages/landing";

function App() {
  return (
    <Wrapper>
      <Landing />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100%;
`;
