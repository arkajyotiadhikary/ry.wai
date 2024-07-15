
/*
    Toasts component
    props inputs are
    - type 
    - icons
    - message
    - onClose
    - backgroundColor

*/


import React from 'react'

import {  AiOutlineCheckCircle,AiOutlineInfoCircle,AiOutlineWarning,AiOutlineCloseCircle} from 'react-icons/ai'
import './Toast.css'

interface ToastProps {
  type: "info" | "warning" | "success" | "error";
  icon?: JSX.Element;
  message?: string;
  position?: "bottom-center" | "bottom-left" | "bottom-right" | "top-center" | "top-left" | "top-right";
  onClose?: () => void;
  backgroundColor?: string;
}

// Icon object 
const icons = {
    success: <AiOutlineCheckCircle />,
    info: <AiOutlineInfoCircle />,
    warning: <AiOutlineWarning />,
    error: <AiOutlineCloseCircle />
}

// Default messages 
const defaultMessages = {
    success: "Success",
    info: "Info",
    warning: "Warning",
    error: "Error"
}

const defaultBackgroundColor = {
    success: "green",
    info: "blue",
    warning: "yellow",
    error: "red"
}

const Toast:React.FC<ToastProps> = ({type = "info" ,icon, message, onClose, backgroundColor, position = "bottom-center"}) => {
  return (
    <div className={`toast toast--${type} ${backgroundColor || defaultBackgroundColor[type]} toast--${position}`}>{icons[type]} {message || defaultMessages[type]}</div>
  )
}

export default Toast