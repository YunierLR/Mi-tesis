document.getElementById("formulario_vulnerabilidad").onsubmit = function(event) {
    let form = document.getElementById("formulario_vulnerabilidad");
    let isValid = true;

    isValid &= validarCampo(form.elements["nombre_Vulnerabilidad"], "error-nombre", event);

    isValid &= validarCampo(form.elements["riesgo"], "error-riesgo",event);
    isValid &= validarCampo(form.elements["solucion_recomendada"], "error-solucion_recomendada", event);
    isValid &= validarCampo(form.elements["responsable"], "error-responsable",event);
    isValid &= validarCampo(form.elements["Descripcion"], "error-Descripcion",event);

    if (isValid) {
        form.submit();
    }
};

function validarCampo(campo, mensajeError, event) {
    if (!campo.value.trim() || campo.value.trim() === "") {
        event.preventDefault();
        campo.classList.add("error");
        document.getElementById(mensajeError).innerText = "Campo requerido";
        return false;
    } else {
        campo.classList.remove("error");
        document.getElementById(mensajeError).innerText = "";
        return true;
    }
}


