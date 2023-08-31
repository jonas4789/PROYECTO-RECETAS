//llama a la funcion ocultar al cargar la pagina, para ocultar todas las recetas
document.addEventListener("DOMContentLoaded", function() {
    ocultar(); 
});

function ocultar(){
    // Obtiene todas las recetas a traves de sus clases
    const recetas = document.getElementsByClassName("w3-container w3-margin");

    //oculta todas las recetas
    for (let i = 0; i < recetas.length; i++) {
        recetas[i].style.display = "none";
    }
};

function mostrarReceta(id){

    // Obtiene todos los botones a traves de sus clases
    const botones = document.getElementsByClassName("w3-button w3-round-xlarge w3-border");

    // Cambia todos los fondos de los botones a blanco
    for (let i = 0; i < botones.length; i++) {
        botones[i].style.background = "white";
    }

    // Cambiar el color del botón seleccionado
    document.getElementById(id).style.background = "orange";
}
