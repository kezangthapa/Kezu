const button = document.getElementById('colorBtn');
const title = document.getElementById('title');

button.addEventListener('click', () => {
    // Generate a random hex color
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    title.style.color = "#" + randomColor;
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the page from reloading

    // Get the data
    const name = document.getElementById('name').value;
    const response = document.getElementById('responseMsg');
    const btn = document.getElementById('submitBtn');

    // UI Feedback
    btn.innerText = "Sending...";
    btn.disabled = true;

    // Simulate an API call
    setTimeout(() => {
        response.innerText = `Thanks, ${name}! Your message was sent.`;
        response.style.display = "block";
        btn.innerText = "Send Message";
        btn.disabled = false;
        
        // Clear the form
        this.reset();
    }, 1500);
});
