import { useState } from "react"

export const useCopied = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async (text) => {
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.log(error)
        }
    };

    return [copied, copyToClipboard];
}