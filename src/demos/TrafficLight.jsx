import React, { useState } from 'react';
import TrafficLightCircle from '../components/TrafficLightCircle';

const TrafficLightConfig = {
    red: { duration: 5000, next: "yellow" },
    yellow: { duration: 2000, next: "green" },
    green: { duration: 3000, next: "red" },
}

const TrafficLight = () => {
    const [active, setActive] = useState("red");

    return (
        <>
            {Object.keys(TrafficLightConfig).map(key => (
                <TrafficLightCircle 
                    key={key}
                    color={key}
                    duration={TrafficLightConfig[key].duration}
                    nextLight={TrafficLightConfig[key].next}
                    isOn={key === active}
                    setActive={setActive}
                />
            ))}
        </>
    )
}

export default TrafficLight