const textToCopy = document.getElementById('text-to-copy');
const copyButton = document.getElementById('copy-button');
const tooltip = copyButton.querySelector('.tooltip');

copyButton.addEventListener('click', function() {
    const text = textToCopy.value;

    if (text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                tooltip.textContent = 'Copied!';
                setTimeout(() => {
                    tooltip.textContent = 'Copy';
                }, 1500);
            })
            .catch(err => console.error('Unable to copy text:', err));
    }
});
