document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
        window.location.href = 'index.html'; // Redirect to index.html
    });
});