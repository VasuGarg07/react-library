import { useEffect, useState } from "react"

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(() => ({
        width: window.innerWidth,
        height: window.innerHeight
    }));

    const handleWindownResize = () => {
        setWindowSize({
            width: window.innerWidth,
        height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindownResize);

        return () => window.removeEventListener('resize', handleWindownResize)
    }, []);

    return windowSize;
}