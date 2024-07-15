"use client";
/*
    Toasts component
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
import "./Toast.css";

export interface ToastProps {
      type: "info" | "warning" | "success" | "error";
      icon?: JSX.Element;
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
      success: <AiOutlineCheckCircle className="toast__icon" />,
      info: <AiOutlineInfoCircle className="toast__icon" />,
      warning: <AiOutlineWarning className="toast__icon" />,
      error: <AiOutlineCloseCircle className="toast__icon" />,
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

const Toast: React.FC<ToastProps> = ({
      type = "info",
      message,
      backgroundColor,
      position = "bottom-center",
      onClose = () => {},
}) => {
      return (
            <div
                  className={`toast toast--${type} ${
                        backgroundColor || defaultBackgroundColor[type]
                  } toast--${position}`}
            >
                  {icons[type]} {message || defaultMessages[type]}
                  <button className="toast__close" onClick={onClose}>
                        <AiOutlineClose />
                  </button>
            </div>
      );
};

export default Toast;
