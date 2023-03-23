import { FunctionComponent } from "react";
import styled from "styled-components";
import { withTheme } from "blockchain-ui/theme";
import { TextField } from "@mui/material";

/**
 * Exclude prefix in order to accept it by customizing to ReactNode.
 */
type InputHTMLPropsWithoutPrefix = Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix">;

export interface textFieldProps extends InputHTMLPropsWithoutPrefix {
  labelText?: string;
  width?: string;
  hoverBorderColor?: string;
  marginRight?: string;
  marginLeft?: string;
  marginTop?: string;
  marginBottom?: string;
  focusedColor?: string;
  borderColor?: string;
}

const Container = styled.div`
  /* width: 30%; */
`;

export const TextLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${withTheme(({ theme }) => theme.components.Input.label.color)};
`;

const StyledTextField = styled(TextField)<{
  width?: string;
  hoverBorderColor?: string;
  marginRight?: string;
  focusedColor?: string;
  borderColor?: string;
}>`
  background: white;
  width: ${(props) => props.width};
  color: white;

  /* & label.Mui-focused {
    /* color: ""; 
  }
    
    */

  /* & .MuiInput-underline:after {
    border-bottom-color: white;
  } */
  & .MuiOutlinedInput-root {
    fieldset {
      border-color: ${(props) => props.borderColor};
    }
    /* & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    } */
    margin-right: ${(props) => props.marginRight};
    &:hover fieldset {
      border-color: ${(props) => props.hoverBorderColor};
    }
    &.Mui-focused fieldset {
      border-color: ${(props) => props.focusedColor};
    }
  }
`;

export const TextFieldInput: FunctionComponent<textFieldProps> = ({
  labelText,
  hoverBorderColor,
  marginRight,
  width,
  borderColor,
  focusedColor,
  ...props
}) => {
  return (
    <Container>
      <div style={{ display: "flex", marginBottom: "30px" }}>
        <StyledTextField id="outlined-required" label={labelText} width={width} marginRight={marginRight} />
        <StyledTextField
          id="outlined-required"
          label={labelText}
          defaultValue="Value"
          width={width}
          marginRight={marginRight}
        />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <StyledTextField
          id="outlined-required"
          label={labelText}
          defaultValue="Value (Hovered)"
          width={width}
          hoverBorderColor={hoverBorderColor}
          marginRight={marginRight}
        />
        <StyledTextField
          id="outlined-required"
          label={labelText}
          defaultValue="Value (Focused) |"
          width={width}
          marginRight={marginRight}
          focusedColor={focusedColor}
        />
      </div>
      <StyledTextField
        id="outlined-required"
        label={labelText}
        defaultValue="Value (Incorrect)"
        width={width}
        marginRight={marginRight}
        borderColor={borderColor}
      />
      <StyledTextField
        id="outlined-required"
        disabled
        label={labelText}
        defaultValue="Value (Disabled)"
        width={width}
        marginRight={marginRight}
      />
    </Container>
  );
};
