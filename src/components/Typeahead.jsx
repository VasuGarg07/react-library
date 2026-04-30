import React, { useEffect, useState } from 'react';

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
        <div style={{ position: "relative", width: "300px" }}>
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
                <ul style={{ position: "absolute", width: "100%", border: "1px solid #ccc", listStyle: "none", padding: 0, margin: 0, backgroundColor: "white" }}>
                    {filtered.map((str) => (
                        <li
                            key={str}
                            onMouseDown={() => handleSelect(str)}
                            style={{
                                padding: "8px",
                                cursor: "pointer"
                            }}
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