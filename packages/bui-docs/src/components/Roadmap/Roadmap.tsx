import React, { CSSProperties, FC, useMemo } from "react";
import styled, { css } from "styled-components";
import { Library } from "../landing/styled";

export type IRoadmapProps = {
  items: {
    title: string;
    description: string;
    completed: boolean;
  }[];
};

const StyledSection = styled.section`
  position: relative;
  background-color: #1b1b1d;
  padding: 100px 50px;
  color: black;
  width: 100%;
  .titleHeader {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
    text-align: center;
    letter-spacing: -1px;
    color: #2d3766;
    margin-bottom: 30px;

    @media (max-width: 1200px) {
      font-size: 40px;
    }
  }
`;

const Wrapper = styled.div<{ progress: number; count: number }>`
  position: relative;
  min-height: 300px;

  &::before {
    content: "";
    display: block;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
    position: absolute;
    width: calc(80% * ${(props) => props.progress} / ${(props) => props.count});
    height: 4px;
    z-index: 2;
    background-color: #25c2a0;
  }
  &::after {
    content: "";
    z-index: 1;
    display: block;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    position: absolute;
    width: 80%;
    height: 4px;
    background-color: #fff;
  }
`;

const Circle = styled.div<{ title: string; count: number; index: number }>`
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  z-index: 4;
  top: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);

  ${(props) => {
    const data: CSSProperties = {};
    if (props.index === 0) {
      data.left = `10%`;
    } else {
      data.left = `${10 + (props.index * 80) / (props.count - 1)}%`;
    }

    return css(data as any);
  }}
`;

const Card = styled.div`
  background-color: #fff;
  width: 200px;
  min-height: 50px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  transition: all 0.3s linear;
  span {
    font-size: 10px;
    color: #333;
    padding-bottom: 5px;
  }
  &.up {
    top: -70px;
    &:hover {
      top: -80px;
    }
  }
  &.down {
    top: 50px;
    &:hover {
      top: 60px;
    }
  }
`;

const Roadmap: FC<IRoadmapProps> = (props) => {
  const completedCount = useMemo(() => {
    return props.items.reduce((prev, next) => {
      return prev + (next.completed ? 1 : 0);
    }, 0);
  }, [props.items]);
  return (
    <StyledSection>
      <div className="titleHeader">Roadmap</div>
      <Wrapper count={props.items.length - 1} progress={completedCount - 1}>
        {props.items.map((item, index) => {
          return (
            <Circle title={item.title} count={props.items.length} index={index}>
              <Card style={{ color: "#333" }} className={index % 2 === 0 ? "up" : "down"}>
                {item.title}
                {item.description && <span>({item.description})</span>}
              </Card>
            </Circle>
          );
        })}
      </Wrapper>
    </StyledSection>
  );
};

export { Roadmap };
