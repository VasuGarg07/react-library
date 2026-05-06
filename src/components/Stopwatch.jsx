import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const [laps, setLaps] = useState([]);


    useEffect(() => {
        if (!isRunning) return;
        const startTime = Date.now() - elapsed;
        const timerId = setInterval(() => {
            setElapsed(Date.now() - startTime);
        }, 16);
        return () => clearInterval(timerId);
    }, [isRunning]);

    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const centiseconds = Math.floor((ms % 1000) / 10);
        const pad = (n) => n.toString().padStart(2, '0');
        return `${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`;
    };

    const start = () => setIsRunning(true);
    const stop = () => setIsRunning(false);
    const lap = () => setLaps(prev => [...prev, elapsed]);
    const reset = () => {
        setIsRunning(0);
        setElapsed(0)
        setLaps([])
    }

    return (
        <div>
            <h2>{formatTime(elapsed)}</h2>

            <button onClick={isRunning ? stop : start}>
                {isRunning ? "Stop": "Start"}
            </button>
            <button onClick={isRunning ? lap : reset} style={{ marginLeft: 8 }}>
                {isRunning ? "Lap": "Reset"}
            </button>

            <div style={{marginTop: 8}}>
                {laps.map((lap, index) => (
                <p key={index} style={{marginBottom: 4}}>Lap #{index + 1}: {formatTime(lap)}</p>
            ))}
            </div>
        </div>
    )
}

export default Stopwatch