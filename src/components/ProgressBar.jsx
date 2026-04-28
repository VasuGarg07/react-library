import React from 'react'

const ProgressBar = ({ value }) => {
    return (
        <div style={{
            width: 400,
            padding: 2,
            border: "2px solid #393939",
            borderRadius: 8
        }}>
            <div style={{
                width: (400 * (value / 100) - 4),
                backgroundColor: "#393939",
                padding: 2,
                borderRadius: 4
            }} />
        </div>
    )
}

export default ProgressBar