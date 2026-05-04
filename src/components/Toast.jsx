import { useEffect } from "react";
import "./Toast.css";

const icons = {
  success: "✔",
  info: "🛈",
  error: "x",
  warning: "⚠",
}

const Toast = ({ id, type, message, onClose, duration }) => {

  useEffect(() => {
    const timeoutId = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`toast toast-${type}`}>
      <p>{icons[type]}</p>
      <p>{message}</p>
      <span style={{ flexGrow: 1 }} />
      <button className="toast-close-icon" onClick={() => onClose(id)}>
        X
      </button>
    </div>
  )
}

export default Toast;