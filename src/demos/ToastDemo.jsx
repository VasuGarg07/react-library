import React from 'react'
import ToastProvider, { useToast } from '../components/ToastsProvider'

const ToastDemo = () => {
    const { addToast } = useToast();

    return (
            <div style={{display:"flex", gap:8}}>
            <button onClick={() => addToast("success", "This is a green toast")}>Show Success Toast</button>
            <button onClick={() => addToast("error", "This is a red toast")}>Show Error Toast</button>
            <button onClick={() => addToast("warning", "This is a yellow toast")}>Show Warning Toast</button>
            <button onClick={() => addToast("info", "This is a blue toast")}>Show Info Toast</button>
            </div>
    )
}

export default ToastDemo