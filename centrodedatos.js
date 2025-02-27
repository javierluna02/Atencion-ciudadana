document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que la página se recargue

        // Capturar los datos del formulario
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const correo = document.getElementById("correo").value;
        const cedula = document.getElementById("cedula").value;
        const asunto = document.getElementById("asunto").value;
        const dia = document.getElementById("dia").value;
        const hora = document.getElementById("hora").value;
        const lugar = document.getElementById("lugar").value;

        // Crear un objeto con los datos
        const usuario = {
            nombre,
            apellido,
            correo,
            cedula,
            asunto,
            dia,
            hora,
            lugar
        };

        // Guardar en localStorage
        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Formulario guardado correctamente");
    });
});
