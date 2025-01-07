document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const emailError = document.getElementById('email-error');

    if (!username || !password) {
        alert('Por favor, preencha todos os campos obrigatórios!');
    } else if (!validateEmail(username)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
        alert('Login realizado com sucesso!');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('facebook-login').addEventListener('click', function() {
    window.location.href = 'https://www.facebook.com/login.php';
});

document.getElementById('google-login').addEventListener('click', function() {
    window.location.href = 'https://accounts.google.com/signin';
});