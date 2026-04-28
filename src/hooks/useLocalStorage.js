import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        try {
            const rawValue = localStorage.getItem(key);
            return rawValue ? JSON.parse(rawValue) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const storeValue = (newValue) => {
        try {
            const evaluated = newValue instanceof Function ? newValue(value) : newValue;
            localStorage.setItem(key, JSON.stringify(evaluated));
            setValue(evaluated);
        } catch (error) {
            console.error(error);
        }
    }

    return [value, storeValue];
}