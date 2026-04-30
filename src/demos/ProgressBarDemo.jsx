import { useState } from "react";
import ProgressBar from "../components/ProgressBar"

const ProgressBarDemo = () => {
    const [progress, setProgress] = useState(50);

    const handleProgress = (value) => {
        let val = parseInt(value);
        if (isNaN(val)) {
            setProgress(1);
            return;
        }

        if (val > 100) {
            setProgress(100);
        } else if (val < 0) {
            setProgress(1);
        } else {
            setProgress(val)
        }
    }
    return (
        <div>
            <input
                type='number'
                placeholder='Enter Progress Bar Value'
                min={1}
                max={100}
                step={1}
                onChange={(e) => handleProgress(e.target.value)}
                value={progress}
                style={{ width: "200px", marginBottom: "8px" }}
            />
            <ProgressBar value={progress} />
        </div>
    )
}

export default ProgressBarDemo