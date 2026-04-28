import { useCallback, useRef, useState } from "react"
import Toast from "./Toast";

const styles = {
  "top-right": {top: "20px", right:"20px"},
  "top-left": {top: "20px", left:"20px"},
  "bottom-right": {bottom: "20px", right:"20px"},
  "bottom-left": {bottom: "20px", left:"20px"},
}

export const useToast = (position = "top-right", duration = 5000) => {
    const [notification, setNotification] = useState(null);
    const style = styles[position];
    const timeoutRef = useRef(null);

    const trigger = useCallback((type, message) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setNotification({
            type, 
            message,
            onClose: () => setNotification(null)
        });

        timeoutRef.current = setTimeout(() => setNotification(null), duration);
    }, [position, duration])

    const ToastComponent = notification ? (
        <div style={{
            position: "fixed",
            ...style
        }}>
            <Toast {...notification} />
        </div>
    ) : null;

    return { ToastComponent, trigger }
}