import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let abortController = new AbortController();
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
                if (!controller.signal.aborted) setData(respData);
            } catch (error) {
                if (error.name === 'AbortError') return;
                setError(error.message);
            } finally {
                if (!controller.signal.aborted) setIsLoading(false)
            }
        }

        fetchData(url);
        return () => abortController.abort();
    }, [url]);

    return { isLoading, data, error };
}