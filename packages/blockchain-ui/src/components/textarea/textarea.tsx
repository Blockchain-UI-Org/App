import React from "react";
import styled from "styled-components";
import { withTheme } from "blockchain-ui/theme";

type InputHTMLPropsWithoutPrefix = Omit<React.InputHTMLAttributes<HTMLInputElement>, "perfix">;

export interface ITextAreaProps extends InputHTMLPropsWithoutPrefix {
  label: string;
  isBackground?: boolean;
  standard?: boolean;
  block?: boolean;
}

const Container = styled.div<{ block?: boolean }>`
  /* display: ${(prop) => (prop.block ? "none" : "block")}; */
`;

const TextAreaField = styled.textarea<{ isBackground?: boolean; standard?: boolean }>`
  width: 220px;
  height: 104px;
  font-size: 16px;
  margin-right: 12px;
  padding: 16px 14px;
  font-weight: 400;
  line-height: 24px;
  color: ${withTheme(({ theme }) => theme.palette.text.primary)};
  border: ${(prop) => (prop.standard ? "none" : " 1px solid rgba(145, 158, 171, 0.32)")};

  border-bottom: 1px solid rgba(145, 158, 171, 0.32);
  background-color: ${(prop) => (prop.isBackground ? "rgba(145, 158, 171, 0.08)" : "transparent")};
  border-radius: ${(prop) => (prop.standard ? "0px" : " 8px")};
  resize: none;

  ::placeholder {
    color: ${withTheme(({ theme }) => theme.palette.text.disabled)};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &:focus {
    outline: none;
  }
`;

export const TextArea: React.FC<ITextAreaProps> = ({ isBackground, standard, block, label }) => {
  return (
    <Container block={block}>
      <TextAreaField placeholder={label} isBackground={isBackground} standard={standard}></TextAreaField>
    </Container>
  );
};
