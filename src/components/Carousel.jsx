import React, { useState } from 'react';
import "./Carousel.css";

const Carousel = ({ imageList }) => {
    const [index, setIndex] = useState(0);
    const handleNext = () => setIndex(prev => prev === imageList.length - 1 ? 0 : prev+1);
    const handlePrev = () => setIndex(prev => prev === 0 ? imageList.length - 1 : prev-1);

    return (
        <div className='carousel-container'>
            <button
                className='carousel-btn prev-btn'
                onClick={handlePrev}>
                    ◀
            </button>
            <img
                className='carousel-img'
                loading='lazy'
                src={imageList[index]}
                alt={`Carousel Image ${index + 1}`}
            />
            <button
                className='carousel-btn next-btn'
                onClick={handleNext}>
                    ►
            </button>
        </div>
    )
}

export default Carousel