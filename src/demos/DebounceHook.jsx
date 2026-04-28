import React, { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

const DebounceHook = () => {
    const [text, setText] = useState("");
    const debouncedFn = useDebounce(val => setText(val), 500);
    return (
        <>
            <input type='text' onChange={(e) => debouncedFn(e.target.value)} />
            <p style={{marginTop:8}}>Debounced Input - {text}</p>
        </>
    )
}

export default DebounceHook