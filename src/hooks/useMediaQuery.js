import { useEffect, useState } from "react"

export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const handleChange = () => setMatches(window.matchMedia(query).matches);
        window.addEventListener('resize', handleChange);
        return () => window.removeEventListener('resize', handleChange);
    }, [query]);

    return matches
}