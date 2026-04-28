import { useCallback, useEffect, useRef } from "react"

export const useThrottle = (callback, delay) => {
    const timeoutRef = useRef();
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    const throttledFn = useCallback((...args) => {
        if (timeoutRef.current) return;

        callbackRef.current(...args);
        timeoutRef.current = setTimeout(() => {
            timeoutRef.current = null;
        }, delay);
    }, [])

    return throttledFn;
}