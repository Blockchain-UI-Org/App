import * as React from "react";
import styled from "styled-components";
import { Heading3, Heading4 } from "../../atoms/Typography";
import { ArrowDownIcon } from "../../atoms/Icons/ArrowDownIcon";

export type TCollapseItem = {
  id: number;
  question: string;
  answer: string;
};

export interface IQuestionCollapseProps {
  items: TCollapseItem[];
}
const CollapseMainContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.default.divider};
  padding: 20px 0px;
`;
const CollapseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CollapseContent = styled("div")<{ isOpen: boolean }>`
  overflow: hidden;
  width: 100%;
  text-align: left;
  transition: all ease-in-out;
  background-color: ${({ theme }) => theme.secondary.background};
  border-radius: 20px;
  margin: ${({ isOpen }) => (isOpen ? "10px 0px" : "0px")};
  padding: ${({ isOpen }) => (isOpen ? "20px 20px" : "0px")};
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
`;

export function QuestionCollapse({ items }: IQuestionCollapseProps) {
  const [openItemIndex, setOpenItemIndex] = React.useState(null);
  return (
    <div>
      {items.map((item) => (
        <CollapseMainContainer key={item.id}>
          <CollapseContainer
            className="cursor-pointer"
            onClick={() => (openItemIndex === item.id ? setOpenItemIndex(null) : setOpenItemIndex(item.id))}
          >
            <Heading3>{item.question}</Heading3>
            <ArrowDownIcon />
          </CollapseContainer>
          <CollapseContent isOpen={openItemIndex === item.id}>
            <Heading4 color="secondary-dark">{item.answer}</Heading4>
          </CollapseContent>
        </CollapseMainContainer>
      ))}
    </div>
  );
}
