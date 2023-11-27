function iniciarSesion() {
    // Obtener valores del formulario
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    // Obtener la información del usuario registrado en localStorage
    var usuarioRegistradoJSON = localStorage.getItem('usuarioRegistrado');

    // Verificar si el usuario existe y las credenciales son correctas
    if (usuarioRegistradoJSON) {
        var usuarioRegistrado = JSON.parse(usuarioRegistradoJSON);
        if (usuarioRegistrado.correo === correo && usuarioRegistrado.contrasena === contrasena) {
            // Guardar la información del usuario en sessionStorage (para mantenerla durante la sesión)
            sessionStorage.setItem('usuarioActual', usuarioRegistradoJSON);

            // Redirigir a la página principal
            window.location.href = 'index.html';
        } else {
            alert('Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.');
        }
    } else {
        alert('Usuario no registrado. Por favor, regístrate.');
    }
}
