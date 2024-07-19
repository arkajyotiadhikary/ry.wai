/*

    WaiButton component
    props inputs are
    - colorShceme
    - iconSpacing
    - isActive
    - isDisabled
    - isLoading
    - leftIcon
    - loadingText
    - rightIcon
    - size
    - spinner
   

*/

import RyBox from "@/layouts/RyBox";
import React from "react";

interface WaiButtonProps {
      children: React.ReactNode;
      onClick?: () => void;
      isDisabled?: boolean;
      isActive?: boolean;
      isLoading?: boolean;
      leftIcon?: React.ReactNode;
      rightIcon?: React.ReactNode;
      colorScheme?:
            | "whiteAlpha"
            | "blackAlpha"
            | "gray"
            | "red"
            | "orange"
            | "yellow"
            | "green"
            | "teal"
            | "blue"
            | "cyan"
            | "purple"
            | "pink";
      size?: "xs" | "sm" | "md" | "lg" | "xl";
      spinner?: boolean;
      // Accept other props too
      [key: string]: any;
}

const sizes = {
      xs: "10px",
      sm: "12px",
      md: "14px",
      lg: "16px",
      xl: "18px",
};

const WaiButton: React.FC<WaiButtonProps> = ({
      children,
      colorScheme,
      onClick,
      isDisabled,
      isActive,
      size = "md",
      spinner,
      rightIcon,
      leftIcon,
      ...props
}) => {
      const style = {
            backgroundColor: colorScheme,
            size: sizes[size],
            cursor: "pointer",
            borderRadius: "5px",
            shadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            fontSize: "14px",
            fontWeight: "bold",
      };
      return (
            <RyBox as={"button"} style={style} onClick={onClick} disabled={isDisabled} {...props}>
                  {rightIcon && rightIcon}
                  {children}
                  {leftIcon && leftIcon}
            </RyBox>
      );
};

export default WaiButton;
