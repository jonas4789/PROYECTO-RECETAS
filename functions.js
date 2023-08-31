//llama a la funcion ocultar al cargar la pagina, para ocultar todas las recetas
document.addEventListener("DOMContentLoaded", function() {
    iniciar();
    ocultar(); 
});

function iniciar(){
    //mostrar mensaje inicial
    document.getElementById("mensajeInicial").innerHTML = "Elije una receta para comenzar";
}

function ocultar(){
    // Obtiene todas las recetas a traves de sus clases
    const recetas = document.getElementsByClassName("w3-container w3-margin");

    //oculta todas las recetas
    for (let i = 0; i < recetas.length; i++) {
        recetas[i].style.display = "none";
    }
    
};

function mostrarReceta(id){
    //ocultar mensaje inicial
    document.getElementById("mensajeInicial").style.display = "none"

    // Obtiene todos los botones a traves de sus clases
    const botones = document.getElementsByClassName("w3-button w3-round-xlarge w3-border");

    // Cambia todos los fondos de los botones a blanco
    for (let i = 0; i < botones.length; i++) {
        botones[i].style.background = "white";
    }

    // Cambiar el color del botón seleccionado
    document.getElementById(id).style.background = "orange";

    //oculta todas las recetas
    ocultar(); 
    
    //Muestra la receta
    document.getElementById(`R${id}`).style.display = "block"

}
