"use client";
/*
    WaiToasts component
    props inputs are
    - type 
    - icons
    - message
    - onClose
    - backgroundColor

*/

import React from "react";

import {
      AiOutlineCheckCircle,
      AiOutlineInfoCircle,
      AiOutlineWarning,
      AiOutlineCloseCircle,
      AiOutlineClose,
} from "react-icons/ai";
import "./index.css";
import RyBox from "@/layouts/RyBox";
import WaiButton from "./WaiButton";

export interface WaiToastProps {
      type: "info" | "warning" | "success" | "error";
      message?: string;
      position?:
            | "bottom_center"
            | "bottom_left"
            | "bottom_right"
            | "top_center"
            | "top_left"
            | "top_right";
      backgroundColor?: string;
      onClose?: () => void;
      duration?: number;
}

// style components
const styles = {
      waitoast: {
            position: "fixed",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "14px",
            fontWeight: "bold",
            zIndex: 9999,
      },
      waitoast__icon: {
            marginRight: "10px",
      },
      waitoast__close: {
            marginLeft: "10px",
      },
      waitoast__bottom_center: {
            bottom: "20px",
      },
      waitoast__bottom_left: {
            bottom: "20px",
            left: "20px",
      },
      waitoast__bottom_right: {
            bottom: "20px",
            right: "20px",
      },
      waitoast__top_center: { top: "20px" },
      waitoast__top_left: { top: "20px", left: "20px" },
      waitoast__top_right: { top: "20px", right: "20px" },
      waitoast__success: {
            backgroundColor: "green",
            color: "white",
      },
      waitoast__info: {
            backgroundColor: "blue",
            color: "white",
      },
      waitoast__warning: {
            backgroundColor: "yellow",
            color: "black",
      },
      waitoast__error: {
            backgroundColor: "red",
            color: "white",
      },
};
// Icon object
const icons = {
      success: <AiOutlineCheckCircle className="waitoast__icon" />,
      info: <AiOutlineInfoCircle className="waitoast__icon" />,
      warning: <AiOutlineWarning className="waitoast__icon" />,
      error: <AiOutlineCloseCircle className="waitoast__icon" />,
};

// Default messages
const defaultMessages = {
      success: "Success",
      info: "Info",
      warning: "Warning",
      error: "Error",
};

const defaultBackgroundColor = {
      success: "green",
      info: "blue",
      warning: "yellow",
      error: "red",
};

const WaiToast: React.FC<WaiToastProps> = ({
      type = "info",
      message,
      backgroundColor,
      position = "bottom_center",
      onClose = () => {},
}) => {
      return (
            <RyBox
                  style={{
                        ...styles.waitoast,
                        ...styles[`waitoast__${type}`],
                        backgroundColor: backgroundColor || defaultBackgroundColor[type],
                        ...styles[`waitoast__${position}`],
                  }}
            >
                  {icons[type]} {message || defaultMessages[type]}
                  <WaiButton size="sm" onClick={onClose}>
                        <AiOutlineClose />
                  </WaiButton>
            </RyBox>
      );
};

export default WaiToast;
