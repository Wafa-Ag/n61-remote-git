document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    alert('Inscription réussie!\n\nNom d\'utilisateur: ' + username + '\nAdresse e-mail: ' + email);
});
