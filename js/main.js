/*
    Constante global con la URL de la API.
    Cuando la API esté disponible en internet, cambiar su URL.
*/

const URL = "http://127.0.0.1:5000";

document.querySelector("#addIngredienteModal form").onsubmit = agregarIngrediente;
document.querySelector("#deleteIngredienteModal form").onsubmit = borrarIngrediente;


obtenerTodosLosIngredientes();