import { useEffect, useRef, useState } from "react";
import "./OtpInput.css";

const OtpInput = ({ otpLength = 6, onComplete }) => {

    const [digits, setDigits] = useState(() => Array(otpLength).fill(""));
    const refs = useRef([]);

    const handleKeyDown = (e, i) => {
        // Handle left and right
        if (e.key === "ArrowLeft" && i > 0) {
            return refs.current[i - 1]?.focus();
        }
        if (e.key === "ArrowRight" && i < otpLength - 1) {
            return refs.current[i + 1]?.focus();
        }


        // Handle delete
        if (e.key === "Backspace") {
            setDigits(prev => {
                const copy = [...prev];
                copy[i] = "";
                return copy;
            });
            if (i > 0) refs.current[i - 1]?.focus();
            return;
        }

        // Handle numeric
        if (!/^\d$/.test(e.key)) return;

        setDigits(prev => {
            const copy = [...prev];
            copy[i] = e.key;
            return copy;
        });
        if (i < otpLength - 1) refs.current[i + 1]?.focus();
    }

    useEffect(() => {
        refs.current[0]?.focus();
    }, []);

    useEffect(() => {
        if(digits.some(d => d === "")) return;
        onComplete?.(digits.join(""));
    }, [digits, onComplete]);

    return (
        <div className="otp-input">
            {digits.map((val, i) => (
                <input
                    key={i}
                    type="text"
                    value={val}
                    onChange={() => { }}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    ref={(currentRef) => {
                        refs.current[i] = currentRef
                    }}
                />
            ))}
        </div>
    )
}

export default OtpInput