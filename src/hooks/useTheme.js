import { useEffect, useState } from "react"

export const useTheme = (initialValue = "light") => {
    const [theme, setTheme] = useState(initialValue);

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? "#f5f5f7" : "#1d1d1f";
        document.body.style.color = theme === 'dark' ? "#f5f5f7" : "#1d1d1f";
    }, [theme]);


    return [theme, toggleTheme];
}