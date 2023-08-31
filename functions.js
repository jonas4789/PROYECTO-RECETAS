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

