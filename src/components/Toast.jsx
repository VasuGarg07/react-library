import React, { useImperativeHandle, useRef } from 'react';

const styles = {
  success: {icon: "✅", bgColor: "#00a800"},
  info: {icon: "ℹ️", bgColor: "#0068a9"},
  error: {icon: "❌", bgColor: "#c30505"},
  warning: {icon: "⚠️", bgColor: "#e6d600"},
}

const Toast = ({ type = "info", message, onClose = () => { } }) => {
  const style = styles[type];

  return (
    <div style={{
      padding: "0 8px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      backgroundColor: style.bgColor,
      color: "#fff"
    }}>
      <p>{style.icon}</p>
      <p>{message}</p>
      <span style={{flexGrow:1}} />
      <button style={{
        border:"none",
        outline:"none",
        width:"fit-content",
        color:"white",
        backgroundColor:"transparent"
      }} onClick={onClose}>
        X
      </button>
    </div>
  )
}

export default Toast;