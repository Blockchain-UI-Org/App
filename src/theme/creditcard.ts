type ICreditCardVariant = {
  color: string;
  background: string;
  highlightLight?: string;
  highlightDark?: string;
  midtone?: string;
};
export type ICreditCardTheme = {
  variants: {
    green: ICreditCardVariant;
    yellow: ICreditCardVariant;
    blue: ICreditCardVariant;
    red: ICreditCardVariant;
    default: ICreditCardVariant;
  };
};
