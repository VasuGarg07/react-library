import { useRef, useState } from "react"
import "./ChipsInput.css"

const ChipsInput = () => {
    const [input, setInput] = useState("");
    const ref = useRef(null);
    const [list, setList] = useState(["samsung", "apple", "oneplus"]);

    const handleKeyDown = (e) => {
        if (e.key !== "Enter") return;
        setList(prev => [...prev, input]);
        setInput("");
        ref.current?.focus();
    }

    const handleRemove = (e, index) => {
        e.stopPropagation();
        if (index < 0 || index >= list.length) return;
        setList(prev => prev.filter((_, i) => i !== index));
    }

    const handleFocus = () => ref.current?.focus();

    return (
        <div className="chips-input" onClick={handleFocus}>
            <div className="chips-list">
                {list.map((item, index) => (
                    <div key={item} className="chip">
                        <span>{item}</span>
                        <span
                            style={{ fontWeight: 700, cursor: "pointer" }}
                            onClick={(e) => handleRemove(e, index)}>
                            x
                        </span>
                    </div>
                ))}
            </div>

            <input
                type="text"
                ref={ref}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default ChipsInput