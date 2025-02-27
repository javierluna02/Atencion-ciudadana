
function redirigir() {
    var select = document.getElementById("servicio");
    var valorSeleccionado = select.value;

    if (valorSeleccionado) {
        window.location.href = valorSeleccionado; // Redirige a la página seleccionada. chicos esto es muy importante.
    }
}
