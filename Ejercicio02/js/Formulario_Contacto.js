 //Funciones de validaciones
 function ValidacionNombre(nombre) {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(nombre);
}
function ValidacionEmail(correo) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(correo);
}

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formularioContacto");
    const inputNombre = document.getElementById("nombre");
    const inputCorreo = document.getElementById("correo");  

    //Controladora evento Enviar Datos
    formulario.addEventListener("submit", function (evento) {
        if (!ValidacionNombre(inputNombre.value)) {
            alert("Nombre NO valido");
            evento.preventDefault();
        }
        if (!ValidacionEmail(inputCorreo.value)) {
            alert("Correo Electronico NO valido");
            evento.preventDefault();
        }
        else{
            alert("Mensaje enviado con EXITO");
        }
    });
});

