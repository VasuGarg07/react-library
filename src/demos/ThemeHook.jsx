import React from 'react'
import { useTheme } from '../hooks/useTheme'

const ThemeHook = () => {
    const [theme, toggleTheme] = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                width: 120,
                backgroundColor: theme === "light" ? "#f5f5f7" : "#1d1d1f",
                color: theme === "light" ? "#1d1d1f" : "#f5f5f7"
            }}>
            {theme + " theme"}
        </button>
    )
}

export default ThemeHook