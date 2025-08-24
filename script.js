document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.querySelector('.form-message').textContent = "Thank you for your message!";
    this.reset();
});
