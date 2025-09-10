// Add a simple shake animation on failed login attempt

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const container = document.querySelector('.login-container');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Example: always shake on submit for demo
        container.classList.remove('shake');
        void container.offsetWidth; // trigger reflow
        container.classList.add('shake');
    });
});