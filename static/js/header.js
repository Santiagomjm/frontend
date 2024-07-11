// Guardamos una referencia al header
const header = document.getElementById("header");


// header.innerHTML = `
// <nav class="menu">
//     <a href="../index.html">Inicio</a>
//     <a href="../templates/ingresar_servicio.html">Registrar servicio</a>
//     <button id="logoutButton" display: none;">Cerrar sesión</button>
// </nav>
// `;
document.getElementById("header").innerHTML= `

            <img class="mini-logo" src="/static/img/logo-prin.png" alt="">
<nav class="menu">
            <a href="../index.html">Tabla</a>
            <a href="../templates/ingresar_servicio.html">Registrar servicio</a>

            <a href="https://proyectocaccatalinatransporte.netlify.app/" target="_blank">Web</a>
            <button id="logoutButton" >Cerrar sesión</button>
</nav>
`;
// Añadimos el evento de logoutButton
const logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", function() {
    localStorage.removeItem("loggedIn");
    
});
