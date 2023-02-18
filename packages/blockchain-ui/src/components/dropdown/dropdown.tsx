import { useState, useRef, useEffect, memo, ReactNode, ReactElement, CSSProperties } from "react";
import styled, { css } from "styled-components";
import { useClickAway, useWindowSize } from "react-use";
import { motion, AnimatePresence } from "framer-motion";
import { withTheme } from "blockchain-ui/theme";

import { Icon } from "../icon/icon";
import { Image } from "../image/image";

interface InlineProps {
  width?: CSSProperties["width"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  inset?: string;
  grow?: boolean;
  gap?: string;
}

interface Position {
  top: string;
  right: string;
  left: string;
  bottom: string;
}

interface DropdownOption {
  key: string | number;
  label: string;
  disabled?: boolean;
  withBorder?: boolean;
  icon?: (width?: string) => ReactElement;
  [otherOptions: string]: unknown;
}

interface DropdownProps<T> {
  renderLabel?: (option: T) => ReactNode;
  initValue?: T;
  options: T[];
  children: (option: T) => ReactNode;
  onChange?: (option: T) => void;
  withBorder?: boolean;
  showShadow?: boolean;
  showHover?: boolean;
  showSelectedCheckMark?: boolean;
  inset?: boolean;
  isSelection?: boolean;
  itemsMinWidth?: string;
  itemsMinHeight?: string;
}

interface HoverProps {
  first?: boolean;
  last?: boolean;
  showHover: boolean;
}

interface ItemProps extends HoverProps {
  first?: boolean;
  last?: boolean;
  disabled: boolean;
  minHeight: string;
}

const Hover = css<HoverProps>`
  background-color: ${withTheme(({ showHover, theme }) =>
    showHover ? theme.palette.default.bg : theme.palette.common.white
  )};
  border-top-right-radius: ${(props) => (props.first ? "10px" : "0px")};
  border-top-left-radius: ${(props) => (props.first ? "10px" : "0px")};
  border-bottom-right-radius: ${(props) => (props.last ? "10px" : "0px")};
  border-bottom-left-radius: ${(props) => (props.last ? "10px" : "0px")};
`;

const Inline = styled.div<InlineProps>`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  padding: ${(props) => props.inset || "0"};
  > * {
    flex-grow: ${(props) => (props.grow ? 1 : 0)};
  }
  > * + * {
    margin-left: ${(props) => props.gap || "0px"};
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
`;

const Display = styled(Inline)<{ withBorder: boolean; showShadow: boolean }>`
  background-color: ${withTheme(({ theme }) => theme.palette.info.bg)};
  border: ${withTheme(({ withBorder, theme }) => (withBorder ? `1px solid ${theme.palette.grey[300]}` : "none"))};
  border-radius: 100px;
  box-shadow: ${withTheme(({ showShadow, theme }) => (showShadow ? theme.shadows.depth2 : "none"))};
  cursor: pointer;
  &:hover {
    background-color: ${withTheme(({ theme }) => theme.palette.default.bg)};
  }
`;

const Card = styled.div<{ position: Position }>`
  position: relative;
  background-color: ${withTheme(({ theme }) => theme.palette.common.white)};
  border-radius: 12px;
  box-shadow: ${withTheme(({ theme }) => theme.shadows.depth1)};
`;

const Options = styled(Card)<{ position: Position; minWidth: string }>`
  position: absolute;
  min-width: ${({ minWidth }) => minWidth};
  ${({ position }) => ({ ...position })};
  padding: 0;
`;

const Item = styled(Inline)<ItemProps>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${withTheme(({ disabled, theme }) => (disabled ? theme.palette.grey[500] : theme.palette.default.color))};
  min-height: ${({ minHeight }) => minHeight};
  &:hover {
    ${Hover}
  }
`;

const DropdownElement = <T extends DropdownOption>({
  renderLabel,
  initValue,
  options,
  children,
  onChange = () => void 0,
  withBorder = true,
  showShadow = false,
  showHover = true,
  showSelectedCheckMark = true,
  inset = true,
  isSelection = false,
  itemsMinWidth = "10rem",
  itemsMinHeight = "60px",
}: DropdownProps<T>) => {
  const ref = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(initValue || options[0]);
  const [position, setPosition] = useState<Position>({
    top: "-20000",
    left: "auto",
    right: "auto",
    bottom: "auto",
  });

  useEffect(() => {
    if (isOpen && ref.current && optionsRef.current) {
      const {
        left: wrapperToLeft,
        right: wrapperToRight,
        height: wrapperHight,
        top: wrapperToTop,
      } = ref.current.getBoundingClientRect();

      const {
        current: { offsetHeight: optionsHeight, offsetWidth: optionsWidth },
      } = optionsRef;
      const toLeft = wrapperToLeft < optionsWidth;
      const toTop = height - (wrapperToTop + wrapperHight) < optionsHeight;

      setPosition({
        top: toTop ? `-${4 + optionsHeight}px` : `${wrapperHight + 4}px`,
        right: toLeft ? "auto" : "0",
        left: toLeft ? "0" : "auto",
        bottom: "auto",
      });
    }
  }, [width, height, isOpen]);

  useEffect(() => {
    setSelected(initValue || options[0]);
  }, [initValue, options]);

  useClickAway(ref, () => {
    setIsOpen(false);
  });

  const renderDisplayText = () => {
    const { label } = selected;
    if (renderLabel && typeof renderLabel === "function") {
      return renderLabel(selected);
    }
    return (
      <Inline inset="0 1rem" gap="0.25rem" alignItems="center" width="fitContent">
        <p>{label}</p>
      </Inline>
    );
  };

  const clickItem = (option: T) => {
    if (!option.disabled) {
      if (selected.key !== option.key) {
        setSelected(option);
      }
      onChange(option);
      setIsOpen(false);
    }
  };

  const getIcon = (option: DropdownOption) => {
    if (option.icon) {
      return option.icon();
    } else if (selected.key === option.key && showSelectedCheckMark) {
      return <Icon name="checkMark" size="medium" />;
    }

    return null;
  };

  return (
    <Wrapper ref={ref}>
      {isSelection ? (
        <Display
          withBorder={withBorder}
          showShadow={showShadow}
          inset="0.25rem"
          gap="0.25rem"
          alignItems="center"
          justifyContent="space-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Inline>{renderDisplayText()}</Inline>
          <Image name="down" width="16px" />
        </Display>
      ) : (
        <div onClick={() => setIsOpen(!isOpen)}>{renderDisplayText()}</div>
      )}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <Options position={position} ref={optionsRef} minWidth={itemsMinWidth}>
              {options.map((option, i) => (
                <Item
                  key={option.key}
                  showHover={showHover}
                  minHeight={itemsMinHeight}
                  justifyContent="space-between"
                  alignItems="center"
                  gap="0.5rem"
                  inset={inset ? "0.75rem 1.5rem" : ""}
                  disabled={option.disabled || false}
                  onClick={() => clickItem(option)}
                  first={i === 0}
                  last={i === options.length - 1}
                >
                  {children(option)}
                  {getIcon(option)}
                </Item>
              ))}
            </Options>
          </motion.section>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export type { DropdownOption, DropdownProps };
export const Dropdown = memo(DropdownElement) as typeof DropdownElement;
