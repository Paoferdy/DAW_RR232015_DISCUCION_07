document.addEventListener("DOMContentLoaded", function() {
    //Array de Imagenes
    const imagenes = [
    "img/1.jpg", 
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpeg", 
    "img/5.jpg", 
    "img/6.jpeg", 
    "img/7.jpg", 
    "img/8.jpg", 
    "img/9.jpg", 
    "img/10.jpg"];
    let indiceImagenActual = 0;

    //Obtenemos los elementos del HTML
    const contenedorImagen = document.getElementById("contenedor-imagenes");
    const botonAnterior = document.getElementById("btn-anterior");
    const botonSiguiente = document.getElementById("btn-siguiente");

    //Funciones
    function actualizarImagen() {
        contenedorImagen.innerHTML = `<img src="${imagenes[indiceImagenActual]}" alt="Imagen ${indiceImagenActual + 1}">`;
    }

    function irAImagenAnterior() {
        indiceImagenActual = (indiceImagenActual - 1 + imagenes.length) % imagenes.length;
        actualizarImagen();
    }

    function irAImagenSiguiente() {
        indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
        actualizarImagen();
    }

    botonAnterior.addEventListener("click", irAImagenAnterior);
    botonSiguiente.addEventListener("click", irAImagenSiguiente);

    //Controladores de EventosA
    document.addEventListener("keydown", function(evento) {
        if (evento.key === "ArrowLeft") {
            irAImagenAnterior();
        } else if (evento.key === "ArrowRight") {
            irAImagenSiguiente();
        }
    });
    actualizarImagen();
});

