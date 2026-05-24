import { useWindowSize } from '../hooks/useWindowSize';

const WindowSizeHook = () => {
    const { width, height } = useWindowSize();

    return (
        <div>
            <p>Width: <strong>{width}px</strong></p>
            <p>Height: <strong>{height}px</strong></p>
            <p style={{ fontSize: 13, color: '#6e6e73' }}>Resize the window to see values update.</p>
        </div>
    )
}

export default WindowSizeHook
