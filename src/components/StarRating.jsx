import React, { useState } from 'react'

const StarRating = ({initial = 0, total = 5}) => {
    const [current, setCurrent] = useState(initial);
    const starArray = Array.from({length: total}, (_, i) => i < current);

  return (
    <div style={{
        display: "flex",
        alignItems:"center",
        gap:8
    }}>
        {starArray.map((el, index) => (
            <div key={index} 
                style={{cursor:"pointer"}}
                onClick={() => setCurrent(index + 1)}>
                {el ? "⭐" : "⭕"}
            </div>
        ))}
    </div>
  )
}

export default StarRating