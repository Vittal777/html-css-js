const button = document.getElementById('btn');
button.addEventListener('click', () => {
    if (button.textContent === 'Save') {
        button.style.backgroundColor = 'black';
        button.textContent = 'Saved';
    } else {
        button.style.backgroundColor = 'Red';
        button.textContent = 'Save';
    }
});
