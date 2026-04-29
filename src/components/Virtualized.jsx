import React , {useState} from 'react';
import "./Virtualized.css";

const Virtualized = ({ list, width, height, itemHeight }) => {
    const size = Math.ceil(height / itemHeight)
    const [indices, setIndices] = useState([0, size])
    
    function handleScroll(e) {
        const currentIndex = Math.floor(e.target.scrollTop / itemHeight);
        setIndices([currentIndex, currentIndex + size])
    }

    return (
        <div className='main-container' 
        onScroll={handleScroll}
            style={{
            width, height
        }}>
            <div className='list-container' style={{
                width: "100%",
                height: itemHeight * list.length
            }}>
                {list.slice(indices[0], indices[1]).map((item, index) => (
                    <div key={index} className='list-item' 
                        style={{
                            height: itemHeight,
                            transform: `translateY(${(indices[0]) * itemHeight}px)`
                        }}>
                        This is item #{item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Virtualized