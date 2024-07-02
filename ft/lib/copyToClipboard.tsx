const copyToClipboard = async function copyToClipboard(text: string) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        alert('Error copying to clipboard:' + error);
    }
};

export {copyToClipboard};