import { useState } from 'react';
import { usePrevious } from '../hooks/usePrevious';

const PreviousHook = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
        <div>
            <p>Current: <strong>{count}</strong></p>
            <p>Previous: <strong>{prevCount ?? '—'}</strong></p>
            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <button onClick={() => setCount(c => c - 1)}>-</button>
                <button onClick={() => setCount(c => c + 1)}>+</button>
            </div>
        </div>
    )
}

export default PreviousHook
