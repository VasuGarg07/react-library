import React, { useState } from 'react'

const StarRating = ({ current, onChange, total = 10 }) => {
    const [hoverCount, setHoverCount] = useState(0)
    const starArray = Array.from({ length: total }, (_, i) => i < (hoverCount || current));

    const handleClick = (index) => {
        onChange(index + 1)
    }
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: 4
        }}>
            {starArray.map((filled, index) => (
                <div key={index}
                    onMouseEnter={() => setHoverCount(index + 1)}
                    onMouseLeave={() => setHoverCount(0)}
                    onClick={() => handleClick(index)}
                    style={{ 
                        cursor: "pointer",
                        color: filled ? "orange" : "black",
                        fontSize: 22
                    }}
                >
                    {filled ? "★" : "☆"}
                </div>
            ))}
        </div>
    )
}

export default StarRating