function guardarRegistro() {
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;
    var genero = document.getElementById('genero').value;

    // Crear objeto con la información del usuario
    var usuario = {
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        contrasena: contrasena,
        genero: genero
    };

    // Convertir el objeto a una cadena JSON
    var usuarioJSON = JSON.stringify(usuario);

    // Guardar la información en localStorage
    localStorage.setItem('usuarioRegistrado', usuarioJSON);

    // Puedes redirigir a otra página o realizar otras acciones según tus necesidades
    alert('Registro exitoso. ¡Bienvenido!');
}
