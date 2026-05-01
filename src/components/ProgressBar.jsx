import { useEffect, useState } from "react";
import "./ProgressBar.css";

// TODO: Read requestAnimationFrame

const ProgressBar = ({ length = 400 }) => {
    const [value, setValue] = useState(1);

    useEffect(() => {
        let intervalId = setInterval(() => {
            if (value === 100) {
                clearInterval(intervalId);
                return;
            }
            setValue(prev => Math.min(prev + 1, 100))
        }, 100);

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="progress-container" style={{ width: length }}>
            <div className="progress" style={{ width: (length * (value / 100) - 4) }} />
        </div>
    )
}

export default ProgressBar