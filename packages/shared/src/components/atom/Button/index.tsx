import { ReactNode } from "react";
import { styled } from "linaria/react";
import { theme } from "../../../theme";
import { Button, Input as IInput } from "antd";

type ButtonType = "primary" | "link";
export interface ButtonProps {
  children?: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  type?: ButtonType;
  width?: string;
  block?: boolean;
  padding?: string;
  loading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  minheight?: number;
  minwidth?: number;
  boxshadow?: string;
  background?: string;
  borderradius?: string;
  noradius?: boolean;
  typography?: any;
  color?: string;
  fontSize?: string;
  bold?: boolean;
  margin?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  bordercolor?: string;
}

const Wrapper = styled.div`
  display: contents;
  & .ant-btn-primary {
    background: ${theme.blue2};

    box-shadow: 0px 0px 12px rgba(28, 86, 225, 0.51);
    font-size: 16px;
    line-height: 30px;
    font-weight: 700;
  }

  & .ant-btn-link {
    box-shadow: none;
    background: transparent;
    color: ${theme.blue2};
  }
`;
const StyledButton = styled(Button)`
  padding: ${({ type, padding }: ButtonProps) => {
    if (padding) {
      return padding;
    }
    switch (type) {
      case "primary":
        return "0px 36px 0px 37px";
      default:
        return "0px 36px 0px 37px";
    }
  }};

  color: ${({ color }: ButtonProps) => {
    return color ? color : theme.base;
  }};
`;
const AInput = styled(IInput)`
  background-color: red;
`;

export const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  htmlType,
  loading,
  onClick,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <AInput />
      <StyledButton
        onClick={onClick}
        htmlType={htmlType}
        loading={loading}
        {...rest}
      >
        {children}
      </StyledButton>
    </Wrapper>
  );
};
