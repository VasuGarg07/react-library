import React, { useState } from 'react'
import StarRating from '../components/StarRating'

const RatingDemo = () => {
    const [rating, setRating] = useState(0);
    return (
    <div>
        <h6>Current Rating: {rating}/10</h6>
        <StarRating current={rating} onChange={setRating} total={10} />
    </div>
  )
}

export default RatingDemo