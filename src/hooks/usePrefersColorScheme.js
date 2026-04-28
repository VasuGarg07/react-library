import { useEffect, useState } from "react"

export const usePrefersColorScheme = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setTheme(mediaQuery.matches ? 'dark' : 'light');
    }, []);

    return theme;
}