document.addEventListener("DOMContentLoaded", function () {
    const diaSelect = document.getElementById("dia");
    const horaSelect = document.getElementById("hora");

    const horariosNormales = ["8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm","8pm"];
    const horariosSabado = ["9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];

    function actualizarHorarios() {
        const diaSeleccionado = diaSelect.value;
        let horariosDisponibles = horariosNormales;
        
        if (diaSeleccionado === "sabado") {
            horariosDisponibles = horariosSabado;
        }

        // Limpiar opciones previas
        horaSelect.innerHTML = "";
        
        // Agregar nueva lista de opciones
        horariosDisponibles.forEach(hora => {
            const option = document.createElement("option");
            option.value = hora;
            option.textContent = hora;
            horaSelect.appendChild(option);
        });
    }

    diaSelect.addEventListener("change", actualizarHorarios);
});
