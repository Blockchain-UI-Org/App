import { Close, SearchIcon, TickIcon } from "blockchain-ui/components/static/images";
import { Paragraph, Subtitle } from "blockchain-ui/components/typography";
import { useTheme, withTheme } from "blockchain-ui/theme";
import { alpha } from "blockchain-ui/utils";
import { FC, useMemo, useState } from "react";
import styled from "styled-components";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { Flex } from "blockchain-ui/components/flex";
import { createPortal } from "react-dom";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1500;
  overflow: hidden;
  background-color: ${withTheme(({ theme }) => {
    return alpha(theme.palette.common.black, 0.5);
  })};
`;

const ModalWrapper = styled.div`
  position: absolute;
  max-width: 500px;
  width: 90%;
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  z-index: 1600;
  background-color: ${withTheme(({ theme }) => {
    return theme.palette.common.white;
  })};
  overflow: hidden;
`;

const ModalHeader = styled.div`
  padding: 15px 20px;
  padding-top: 25px;
  position: relative;
`;

const CloseButton = styled.div`
  transition: all 0.3s linear;
  width: 30px;
  height: 30px;
  padding: 8px;
  border-radius: 50%;
  background-color: ${withTheme(({ theme }) => {
    return theme.palette.common.white;
  })};
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;

  color: ${withTheme(({ theme }) => {
    return theme.palette.buiColors.grey500;
  })};
`;

const InputWrapper = styled.div`
  position: relative;
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  color: ${withTheme(({ theme }) => {
    return theme.palette.buiColors.grey500;
  })};
  width: 20px;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

const ListSearch = styled.input`
  margin-top: 15px;
  position: relative;
  display: flex;
  padding: 16px 16px 16px 40px;
  height: 40px;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  outline: none;
  border-radius: 12px;
  color: ${withTheme(({ theme }) => {
    return theme.palette.buiColors.grey500;
  })};
  background-color: ${withTheme(({ theme }) => {
    return alpha(theme.palette.buiColors.secondary100, 0.5);
  })};
  border: 1px solid
    ${withTheme(({ theme }) => {
      return theme.palette.buiColors.secondary100;
    })};
  appearance: none;
  font-size: 16px;
  transition: background-color 300ms ease 0s;
  &:focus {
    background-color: ${withTheme(({ theme }) => {
      return theme.palette.common.white;
    })};
    outline: none;
  }
`;

export type IBasicToken = { name: string; icon: React.FC<any>; symbol: string; fiat?: boolean; decimals?: number };

const TokenInfo = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 4px 20px;
  cursor: pointer;
  background-color: ${withTheme(({ theme, active }) => {
    return active ? alpha(theme.palette.buiColors.secondary100, 0.3) : theme.palette.common.white;
  })};
  &:hover {
    background-color: ${withTheme(({ theme }) => {
      return alpha(theme.palette.buiColors.secondary100, 0.3);
    })};
  }
`;

const StyledTickIcon = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  color: ${withTheme(({ theme }) => {
    return alpha(theme.palette.buiColors.success500, 1);
  })};
`;

export type ICryptoListModalProps = {
  selectedToken: IBasicToken;
  tokens: IBasicToken[];
  onSelect: (token: IBasicToken) => void;
  onClose: () => void;
};

const TokenIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 5px;
  background-color: ${withTheme(({ theme }) => {
    return theme.palette.buiColors.secondary100;
  })};
`;

export const CryptoListModal: FC<ICryptoListModalProps> = (props) => {
  const theme = useTheme();
  const { onClose, onSelect, tokens, selectedToken } = props;

  const [search, setSearch] = useState("");
  const filteredTokens = useMemo(() => {
    const selectedIndex = tokens.findIndex((item) => item.name.toLowerCase() === selectedToken.name.toLowerCase());
    if (selectedIndex === -1) {
      return tokens;
    }
    const selected = tokens[selectedIndex];
    const newList: IBasicToken[] = [
      selected,
      ...tokens.slice(0, selectedIndex),
      ...tokens.slice(selectedIndex + 1, tokens.length - 1),
    ];
    if (!search) {
      return newList;
    }
    const regex = new RegExp(search.toLowerCase(), "g");
    return newList.filter((item) => {
      return regex.test(item.name.toLowerCase()) || regex.test(item.symbol.toLowerCase());
    });
  }, [search, tokens, selectedToken]);

  const TokenSelect = useMemo(() => {
    return ({ index, style }: ListChildComponentProps) => {
      const token = filteredTokens[index];
      const { icon: Icon } = token;
      const isActive = token.symbol.toLowerCase() === selectedToken.symbol.toLowerCase();
      return (
        <TokenInfo
          data-testid="info"
          onClick={() => {
            onSelect(token);
            onClose();
          }}
          active={isActive}
          style={style}
        >
          <Flex>
            <TokenIconWrapper>
              <Icon style={{ width: "90%", height: "90%" }} />
            </TokenIconWrapper>
          </Flex>
          <Flex style={{ marginLeft: 10 }} direction="column">
            <Subtitle style={{ textTransform: "capitalize", WebkitFontSmoothing: "always" }} variant="subtitle2">
              {token.name}
            </Subtitle>
            <Paragraph fontSize={10} style={{ textTransform: "uppercase" }} variant="body2">
              {token.symbol}
            </Paragraph>
          </Flex>
          {isActive && (
            <StyledTickIcon>
              <TickIcon />
            </StyledTickIcon>
          )}
        </TokenInfo>
      );
    };
  }, [filteredTokens]);

  return createPortal(
    <ModalOverlay data-testid="overlay" onClick={onClose}>
      <ModalWrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ModalHeader data-testid="header">
          <Subtitle>Select a Token</Subtitle>
          <CloseButton data-testid="close-button" onClick={onClose}>
            <Close />
          </CloseButton>
          <InputWrapper>
            <ListSearch
              value={search}
              onChange={(e) => {
                const val = e.target.value;
                setSearch(val);
              }}
              placeholder="Search name or paste address"
              autoComplete="off"
            />
            <StyledSearchIcon />
          </InputWrapper>
        </ModalHeader>
        <List height={400} itemData={filteredTokens} itemCount={filteredTokens.length} itemSize={56} width="100%">
          {TokenSelect}
        </List>
      </ModalWrapper>
    </ModalOverlay>,
    document.body
  );
};
