export const useCopyToClipboard = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => alert("Text Copied to clipboard"))
            .catch(e => console.log(e));
    }

    return { copyToClipboard };
}