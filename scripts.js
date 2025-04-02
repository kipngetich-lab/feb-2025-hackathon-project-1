// Function to validate the contact form before submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    let isValid = true;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Validate name
    if (name.trim() === '') {
        isValid = false;
        alert('Please enter your name.');
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        alert('Please enter a valid email address.');
    }

    // Validate message
    if (message.trim() === '') {
        isValid = false;
        alert('Please enter a message.');
    }

    // If form is not valid, prevent submission
    if (!isValid) {
        e.preventDefault();
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle (Switch between light and dark themes)
const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Dark Mode";
toggleButton.classList.add('dark-mode-btn');
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
