import React, { useEffect, useState } from 'react';
import "./Typeahead.css"

const itemList = [
    "html", "css", "javascript",
    "angular", "next", "nest", "python",
    "typescript", "node.js", "express", "react.js"
]

const Typeahead = ({ list = itemList }) => {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const filtered = query ? list.filter(str => str.includes(query)) : [];

    const handleSelect = (string) => {
        setQuery(string);
        setIsOpen(false);
    }


    return (
        <div className='typeahead-container'>
            <input
                placeholder='enter query'
                value={query}
                onChange={e => {
                    setQuery(e.target.value);
                    setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
            />

            {isOpen && filtered.length > 0 && (
                <ul className='typeahead-options-list'>
                    {filtered.map((str) => (
                        <li
                            key={str}
                            onMouseDown={() => handleSelect(str)}
                        >
                            {str}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Typeahead