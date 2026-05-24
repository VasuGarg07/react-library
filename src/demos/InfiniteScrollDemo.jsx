import { useState, useCallback } from 'react';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

const generateItems = (start, count) =>
    Array.from({ length: count }, (_, i) => `Item #${start + i + 1}`);

const InfiniteScrollDemo = () => {
    const [items, setItems] = useState(() => generateItems(0, 15));
    const [loading, setLoading] = useState(false);

    const loadMore = useCallback(() => {
        if (loading) return;
        setLoading(true);
        setTimeout(() => {
            setItems(prev => [...prev, ...generateItems(prev.length, 10)]);
            setLoading(false);
        }, 600);
    }, [loading]);

    const ref = useInfiniteScroll(loadMore);

    return (
        <div style={{ height: 400, overflowY: 'auto', border: '1px solid #d2d2d7', borderRadius: 8, padding: 12 }}>
            {items.map((item, i) => (
                <div key={i} style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', fontSize: 14 }}>
                    {item}
                </div>
            ))}
            <div ref={ref} />
            {loading && <p style={{ textAlign: 'center', color: '#6e6e73', fontSize: 13 }}>Loading more...</p>}
        </div>
    )
}

export default InfiniteScrollDemo
