import React from 'react';
import { useOnlineStatus } from "../hooks/useOnlineStatus";


const OnLineHook = () => {
    const online = useOnlineStatus();
    return (
        <div>
            {online
                ? "You are online"
                : "Please connect your internet"}
        </div>
    )
}

export default OnLineHook