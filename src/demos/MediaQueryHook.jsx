import { useMediaQuery } from '../hooks/useMediaQuery';

const MediaQueryHook = () => {
    const isMobile = useMediaQuery('(max-width: 480px)');
    const isTablet = useMediaQuery('(min-width: 481px) and (max-width: 1024px)');
    const isDesktop = useMediaQuery('(min-width: 1025px)');
    const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');

    return (
        <div>
            <p>isMobile: <strong>{String(isMobile)}</strong></p>
            <p>isTablet: <strong>{String(isTablet)}</strong></p>
            <p>isDesktop: <strong>{String(isDesktop)}</strong></p>
            <p>prefersDark: <strong>{String(prefersDark)}</strong></p>
            <p style={{ marginTop: 12, fontSize: 13, color: '#6e6e73' }}>Resize the window to see values update.</p>
        </div>
    )
}

export default MediaQueryHook
