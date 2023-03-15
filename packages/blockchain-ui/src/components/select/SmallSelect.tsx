import { withTheme } from "blockchain-ui/theme";
import { alpha } from "blockchain-ui/utils";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import { ChevronDown } from "../static/images";
import { Subtitle } from "../typography";

export type ISmallSelectProps = {
  selectedValue?: string;
  options: [string] | string[];
  onChange?: (val: string) => void;
};

const SelectWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
  ${withTheme(({ theme }) => {
    const styles = theme.components.BuiButton.variants.soft.styles({ color: "default" });
    const normalCss = css({
      color: styles.foreground,
      backgroundColor: styles.bg,
      transition: `all 0.3s linear`,
      transitionProperty: "box-shadow, background-color, border-color, color",
    });
    const hoverCss = css({
      backgroundColor: styles.hoverBg,
      borderColor: styles.borderHoverColor,
      color: styles.foreground,
      boxShadow: styles.boxShadowHover,
    });
    const activeCss = css({
      backgroundColor: styles.hoverBg ? alpha(styles.hoverBg, 0.4) : undefined,
    });
    return css`
      ${normalCss}

      &:hover {
        ${hoverCss}
      }
      &:active {
        ${activeCss}
      }
    `;
  })}
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  background-color: #f1f1f1;
  border-radius: 6px;
`;

const Option = styled.div`
  padding: 3px 8px;
  cursor: pointer;
  ${withTheme(({ theme }) => {
    const styles = theme.components.BuiButton.variants.soft.styles({ color: "default" });
    const normalCss = css({
      color: styles.foreground,
      // backgroundColor: styles.bg,
      transition: `all 0.3s linear`,
      transitionProperty: "box-shadow, background-color, border-color, color",
    });
    const hoverCss = css({
      backgroundColor: styles.hoverBg,
      borderColor: styles.borderHoverColor,
      color: styles.foreground,
      boxShadow: styles.boxShadowHover,
    });
    const activeCss = css({
      backgroundColor: styles.hoverBg ? alpha(styles.hoverBg, 0.4) : undefined,
    });
    return css`
      ${normalCss}

      &:hover {
        ${hoverCss}
      }
      &:active,
      &.active {
        ${activeCss}
      }
    `;
  })}
`;

export const SmallSelect = (props: ISmallSelectProps) => {
  const { selectedValue: selectedValuep, options, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(selectedValuep || options[0] || "Select");

  const [{ top, left, height, width }, setBoundingRect] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const selectRef = useRef<HTMLDivElement>(null);

  const calcRect = () => {
    if (selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      const top = rect.top + document.documentElement.scrollTop;
      const left = rect.left + document.documentElement.scrollLeft;
      const width = rect.width;
      const height = rect.height;
      setBoundingRect({ top, left, width, height });
    }
  };

  const isInsideClickRef = useRef(false);

  const DropdownPosition = useMemo(() => {
    return {
      top: top + height + 5,
      left: left,
      width: width,
    };
  }, [top, left, width, height]);

  const handleClickAway = useCallback(() => {
    if (!isInsideClickRef.current) {
      setIsOpen(false);
    }
    isInsideClickRef.current = false;
  }, []);

  useEffect(() => {
    calcRect();
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickAway);
    return () => {
      document.addEventListener("click", handleClickAway);
    };
  }, []);

  return (
    <>
      <SelectWrapper
        ref={selectRef}
        onClick={() => {
          // Prevent ClickAway when clicking this element
          isInsideClickRef.current = true;
          setIsOpen((old) => !old);
        }}
      >
        <Subtitle data-testid="select-value" style={{ marginRight: 10 }} variant="subtitle2">
          {selectedValuep || selectedValue}
        </Subtitle>
        <ChevronDown width={9} />
      </SelectWrapper>
      {isOpen &&
        createPortal(
          <OptionsContainer
            data-testid="options"
            onClick={(e) => {
              isInsideClickRef.current = true;
            }}
            style={{ position: "absolute", zIndex: 100, ...DropdownPosition }}
          >
            {options.map((opt, index) => {
              return (
                <Option
                  data-testid={index}
                  onClick={() => {
                    setIsOpen(false);
                    if (!selectedValuep) {
                      setSelectedValue(opt);
                    }
                    onChange && onChange(opt);
                  }}
                  className={opt === selectedValue ? "active" : ""}
                  key={opt}
                >
                  <Subtitle variant="subtitle2">{opt}</Subtitle>
                </Option>
              );
            })}
          </OptionsContainer>,
          document.body
        )}
    </>
  );
};
