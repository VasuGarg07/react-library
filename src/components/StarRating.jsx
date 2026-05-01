import React, { useState } from 'react'
import "./StarRating.css";

const StarRating = ({ current, onChange, total = 10 }) => {
    const [hoverCount, setHoverCount] = useState(0)
    const starArray = Array.from({ length: total }, (_, i) => i < (hoverCount || current));

    const handleClick = (index) => {
        onChange(index + 1)
    }
    return (
        <div className='rating-container'>
            {starArray.map((filled, index) => (
                <div key={index}
                    onMouseEnter={() => setHoverCount(index + 1)}
                    onMouseLeave={() => setHoverCount(0)}
                    onClick={() => handleClick(index)}
                    className='rating-star'
                    style={{ color: filled ? "orange" : "black"}}
                >
                    {filled ? "★" : "☆"}
                </div>
            ))}
        </div>
    )
}

export default StarRating