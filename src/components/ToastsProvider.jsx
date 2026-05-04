import { createContext, useContext, useEffect, useState } from "react";
import ToastPortal from "./ToastPortal";
import Toast from "./Toast";

const makeId = () => Math.random().toString(36).substring(2, 36);
const ToastContext = createContext(null);

const ToastProvider = ({ children, maxCount = 5, duration = 3000 }) => {

    const [toasts, setToasts] = useState([]);

    const addToast = (type, message) => setToasts(prev => {
        if (prev.length === maxCount) {
            return [...prev.slice(1), {
                type,
                message,
                id: makeId()
            }];
        } else {
            return [...prev, {
                type,
                message,
                id: makeId()
            }];
        }
    });

    const removeToast = (toastId) => {
        console.log(toastId)
        setToasts(prev => prev.filter(toast => toast.id !== toastId));
    }

    return <ToastContext.Provider value={{ addToast }}>
        {children}
        <ToastPortal>
            {toasts.map(toast => (
                <Toast
                    key={toast.id}
                    id={toast.id}
                    type={toast.type}
                    message={toast.message}
                    duration={duration}
                    onClose={removeToast}
                />
            ))}
        </ToastPortal>
    </ToastContext.Provider>
}

export default ToastProvider;

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw Error("use context inside ToastProvider");
    }

    return context;
} 
