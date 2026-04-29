import React, { useImperativeHandle, useState } from 'react'
import { createPortal } from 'react-dom';
import { useClickOutside } from "../hooks/useClickOutside"
import "./Dialog.css"

const Dialog = ({ children, ref }) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        toggle: () => setIsOpen(prev => !prev)
    }), []);

    if (!isOpen) return null;

    return createPortal(
        <div className='overlay'>
            <div className='dialog-container'>
                {children}
            </div>
        </div>,
        document.getElementById('portal-root')
    )
}

export default Dialog