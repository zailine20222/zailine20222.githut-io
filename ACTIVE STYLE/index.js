// Verificar si el usuario está autenticado al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    var usuarioActualJSON = sessionStorage.getItem('usuarioActual');
    var usuarioActual = JSON.parse(usuarioActualJSON);

    if (usuarioActual) {
        // Mostrar información del usuario
        mostrarInformacionUsuario(usuarioActual);
    } else {
        // Redirigir al formulario de inicio de sesión si no hay usuario autenticado
        window.location.href = 'login.html';
    }
});

function mostrarInformacionUsuario(usuario) {
    var usuarioInfoDiv = document.getElementById('usuarioInfo');
    usuarioInfoDiv.innerHTML = 'Bienvenido, ' + usuario.nombre 
}

function cerrarSesion() {
    // Limpiar la información del usuario al cerrar sesión
    sessionStorage.removeItem('usuarioActual');

    // Redirigir al formulario de inicio de sesión
    window.location.href = 'login.html';
}
