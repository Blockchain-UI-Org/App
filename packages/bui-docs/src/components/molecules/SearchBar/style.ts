import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 5px 20px rgba(195, 109, 196, 0.2);
  border-radius: 36px;
  background-color: ${({ theme }) => theme.secondary.background};
  overflow: hidden;
  padding: 16px 30px;
  & input {
    flex: 1;
    background-color: transparent;
    box-shadow: none;
    border: none;
    font-size: 20px;
  }
  & input:focus {
    border: none;
    outline: none;
  }
`;
