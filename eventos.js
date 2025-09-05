document.addEventListener("DOMContentLoaded", function () {
    const div = document.getElementById("botoncito");
    const boton = document.getElementById("btnCito");
    div.addEventListener("click", function () {
        alert("Hola! Soy el div");
    });
    boton.addEventListener("click", function (event) {
        event.stopPropagation();
        alert("Hola!");
    });
});