import { useCallback, useEffect, useRef } from "react";

export const useDebounce = (callback, delay) => {
    const timeoutRef = useRef();
    const callbackRef = useRef(callback);

    // update callback
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    // for unmounting
    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    const debouncedFn = useCallback((...args) => {
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            callbackRef.current(...args);
        }, delay);
    }, []);

    return debouncedFn;
}