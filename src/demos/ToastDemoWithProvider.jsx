import ToastProvider from '../components/ToastsProvider';
import ToastDemo from './ToastDemo';

export default function ToastDemoWithProvider() {
    return (
        <ToastProvider>
            <ToastDemo />
        </ToastProvider>
    );
}
