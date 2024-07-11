document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');
    const loginContainer = document.getElementById('login-container');
    const mainContent = document.getElementById('main-content');
    const header = document.getElementById('header');
    const logoutButton = document.getElementById('logoutButton');

    // Verificar si el usuario ya ha iniciado sesión
    if (localStorage.getItem('loggedIn') === 'true') {
        loginContainer.style.display = 'none';
        mainContent.style.display = 'block';
        header.style.display = 'flex';
        logoutButton.style.display = 'block'; // Mostrar el botón de cerrar sesión
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Valores de ejemplo para nombre de usuario y contraseña
        const validUsername = 'admin';
        const validPassword = '1234';
        

        if (username === validUsername && password === validPassword) {
            errorMessage.textContent = '';
            localStorage.setItem('loggedIn', 'true'); // Guardar el estado de inicio de sesión
            loginContainer.style.display = 'none';
            mainContent.style.display = 'block';
            header.style.display = 'flex'; // Mostrar el encabezado
            logoutButton.style.display = 'block'; // Mostrar el botón de cerrar sesión
        } else {
            errorMessage.textContent = 'Usuario o contraseña incorrectos';
        }
    });

    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        loginContainer.style.display = 'flex';
        mainContent.style.display = 'none';
        header.style.display = 'none';
        logoutButton.style.display = 'none';
    });
});
