import React, { useEffect, useState } from 'react'

const StarRating = ({initial = 0, total = 5}) => {
    const [current, setCurrent] = useState(initial);
    const [starArr, setStarArr] = useState(Array(total).fill(false));

    useEffect(() => {
        setStarArr(prev => prev.map((el, i) => i < current));
    }, [current]);

  return (
    <div style={{
        display: "flex",
        alignItems:"center",
        gap:8
    }}>
        {starArr.map((el, index) => (
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