import React from "react";
import Menu from "./Components/Menu";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Menu></Menu>
        <ImageContainer>
          <img
            alt="underConstruction"
            src="images/underConstruction.jpg"
            height="1000px"
          ></img>
        </ImageContainer>
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div``;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;
