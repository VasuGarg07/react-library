import { useState } from 'react';
import { useCopied } from '../hooks/useCopied';

const CopyToClipboardHook = () => {
    const [text, setText] = useState('Hello world!');
    const [copied, copyToClipboard] = useCopied();

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => copyToClipboard(text)}
                style={{ marginLeft: 8 }}>
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    )
}

export default CopyToClipboardHook
