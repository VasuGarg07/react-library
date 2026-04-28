import  { useRef } from 'react';
import { useClickOutside } from './hooks/useClickOutside';

const Modal = ({ onClose }) => {
    const modalRef = useRef(null);
    useClickOutside(modalRef, onClose)

    return (
        <div style={styles.overlay}>
            <div style={styles.modal} ref={modalRef}>
                <h2>Example Modal</h2>
                <p>This modal closes when you click outside of it.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        width: '300px',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    },
};

export default Modal;