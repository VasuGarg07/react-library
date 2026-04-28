import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const LocalStorageHook = () => {
    const [lsValue, setLsValue] = useLocalStorage("counter", 0)

    return (
        <div>
            <p>Current Value: {lsValue}</p>
            <button onClick={() => setLsValue((prev) => prev + 1)}>Update</button>
        </div>
    )
}

export default LocalStorageHook