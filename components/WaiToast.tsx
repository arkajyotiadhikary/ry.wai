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
import RyBox from "@/layouts/ryBox";

export interface WaiToastProps {
      type: "info" | "warning" | "success" | "error";
      message?: string;
      position?:
            | "bottom-center"
            | "bottom-left"
            | "bottom-right"
            | "top-center"
            | "top-left"
            | "top-right";
      backgroundColor?: string;
      onClose?: () => void;
      duration?: number;
}

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
      position = "bottom-center",
      onClose = () => {},
}) => {
      return (
            <RyBox
                  className={`waitoast waitoast--${type} ${
                        backgroundColor || defaultBackgroundColor[type]
                  } waitoast--${position}`}
            >
                  {icons[type]} {message || defaultMessages[type]}
                  <button className="waitoast__close" onClick={onClose}>
                        <AiOutlineClose />
                  </button>
            </RyBox>
      );
};

export default WaiToast;
