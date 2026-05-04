import { createPortal } from 'react-dom';
import "./ToastPortal.css"

const ToastPortal = ({children}) => {
  return createPortal(
    <div className='toast-overlay'>
        {children}
    </div>,
    document.getElementById('portal-root')
  );
}

export default ToastPortal