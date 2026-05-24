import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            setIsLoading(true);
            setData(null);
            setError(null);

            try {
                const resp = await fetch(url, { signal: abortController.signal });

                if (!resp.ok) {
                    throw Error(`Http Error: ${resp.status}`)
                }

                const respData = await resp.json();
                if (!abortController.signal.aborted) setData(respData);
            } catch (error) {
                if (error.name === 'AbortError') return;
                setError(error.message);
            } finally {
                if (!abortController.signal.aborted) setIsLoading(false);
            }
        }

        fetchData();
        return () => abortController.abort();
    }, [url]);

    return { isLoading, data, error };
}
