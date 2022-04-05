const listIngredient = document.getElementById("ingredient-temp-list");
const newIngredient = document.getElementById("newIng");
// const receta = document.getElementById("form-group");
// const recetario = document.getElementById("form-recipe")


//Agregr ingredientes a receterario
var lista = document.getElementById("ingredient-temp-list");
var tarealist = document.getElementById("ingredient-name");
var btnNueva = document.getElementById("newIng")


document.addEventListener("DOMContentLoaded", function() {
    recetario.addEventListener("submit", receta )
    console.log(receta);

});



//funciones

var agregaReceta = function () {

    e.preventDefault();
    e.stopPropagation();

    var receta = tareaInput.value,
        nuevaT = document.createElement("li");
    enlace = document.createElement("a");
    content = document.createTextNode("receta");

    enlace.appendChild(content);
    enlace.setAttribute("href", "#");
    nuevaT.appendChild(enlace);
    lista.appendChild(nuevaT);
    tareaInput.value = "";


};

btnNueva.addEventListener("click", receta);



