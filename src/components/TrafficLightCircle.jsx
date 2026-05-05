import React, { useEffect } from 'react'

const TrafficLightCircle = ({ color, duration, isOn, nextLight, setActive }) => {

    useEffect(() => {
        if (!isOn) return;
        const timer = setTimeout(() => setActive(nextLight), duration);
        return () => clearTimeout(timer);
    }, [isOn]);

    return (
        <div style={{
            width: "6rem",
            height: "6rem",
            background: isOn ? color : "transparent",
            border: "2px solid",
            borderRadius: "50%",
            marginBottom: 4
        }} />
    )
}

export default TrafficLightCircle