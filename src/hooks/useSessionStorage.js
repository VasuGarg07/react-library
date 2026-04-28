import { useState } from "react"

export const useSessionStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        try {
            const rawValue = window.sessionStorage.getItem(key);
            return rawValue ? JSON.parse(rawValue) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const storeValue = (newValue) => {
        try {
            const evaluated = newValue instanceof Function ? newValue(value) : newValue;
            window.sessionStorage.setItem(key, JSON.stringify(evaluated));
            setValue(evaluated)
        } catch (error) {
            console.error(error);
        }
    }

    return [value, storeValue];
}