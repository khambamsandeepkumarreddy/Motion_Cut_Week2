function validateForm(event) {
    event.preventDefault();

    // Basic form validation
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (!username || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }
    alert('Form submitted successfully!');
    document.getElementById('registration-form').reset();
}