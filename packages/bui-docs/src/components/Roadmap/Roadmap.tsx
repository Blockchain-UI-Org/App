import React, { CSSProperties, FC, useMemo } from "react";
import styled, { css } from "styled-components";
import { Heading } from "../Heading/Heading";
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

  padding: 60px 0;

  width: 100%;
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
    background: var(--ifm-bui-gradient);
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
    background-color: var(--ifm-bui-divider-color);
  }

  @media screen and (max-width: 400px) {
    margin-top: 100px;
    height: calc(140px * ${({ count }) => count});
    &::before {
      width: 4px;
      top: 0;
      left: 50%;
      transform: translateY(0) translateX(-50%);
      height: calc(140px * ${({ progress }) => progress});
    }

    &::after {
      width: 4px;
      height: calc(140px * ${({ count }) => count});
    }
  }
`;

const Circle = styled.div<{ title: string; count: number; index: number }>`
  width: 30px;
  height: 30px;
  background: var(--ifm-font-color-base);
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

  @media (max-width: 1200px) {
    width: 10px;
    height: 10px;
  }

  @media screen and (max-width: 400px) {
    top: 0;
    left: 50%;
    ${(props) => {
      const data: CSSProperties = {};
      if (props.index === 0) {
        data.top = `0%`;
      } else {
        data.top = `${(props.index * 100) / (props.count - 1)}%`;
      }

      return css(data as any);
    }}
  }
`;

const Card = styled.div`
  background-color: var(--ifm-bui-bg-secondary);
  width: 200px;
  min-height: 50px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  /* align-text: center; */
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  transition: all 0.3s linear;
  span {
    font-size: 10px;
    color: var(--ifm-bui-text-secondary);
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

  @media (max-width: 1000px) {
    font-size: 12px;
    min-height: 30px;
    width: 130px;

    .itemDescription {
      display: none;
    }
  }
  @media screen and (max-width: 400px) {
    width: 120px;
    font-size: 10px;
    &.up {
      top: -10px;
      left: -80px;
      &:hover {
        top: -15px;
      }
    }
    &.down {
      top: -10px;
      left: 90px;
      &:hover {
        top: -15px;
      }
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-center">
              <Heading style={{ display: "Flex", justifyContent: "center" }}>Roadmap</Heading>
            </div>
            <Wrapper count={props.items.length - 1} progress={completedCount - 1}>
              {props.items.map((item, index) => {
                return (
                  <Circle title={item.title} count={props.items.length} index={index}>
                    <Card className={index % 2 === 0 ? "up" : "down"}>
                      {item.title}
                      {item.description && <span className="itemDescription">({item.description})</span>}
                    </Card>
                  </Circle>
                );
              })}
            </Wrapper>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export { Roadmap };
