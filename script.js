const button = document.getElementById('colorBtn');
const title = document.getElementById('title');

button.addEventListener('click', () => {
    // Generate a random hex color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    title.style.color = "#" + randomColor;
});
