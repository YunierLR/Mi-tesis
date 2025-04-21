document.getElementById("formulario").onsubmit = function (event) {
    var form = document.getElementById("formulario");
    var nombre = form.elements["nombre_Vulnerabilidad"];
    var riesgo = form.elements["riesgo"];
    var responsable = form.elements["responsable"];
    var Descripcion = form.elements["Descripcion"];
    var valido = true;

    // Validar campos generales
    if (!nombre.value.trim() || nombre.value.trim() === "") {
        event.preventDefault()
        nombre.classList.add("error");
        document.getElementById("error-nombre").innerText = "Por favor, completa este campo.";
        valido = false;
    } else {
        nombre.classList.remove("error");
        document.getElementById("error-nombre").innerText = "";
    }

    if (!riesgo.value.trim() || nombre.value.trim() === "") {
        event.preventDefault()
        riesgo.classList.add("error");
        document.getElementById("error-riesgo").innerText = "Por favor, selecciona un nivel de riesgo.";
        valido = false;
    } else {
        riesgo.classList.remove("error");
        document.getElementById("error-riesgo").innerText = "";
    }

    if (!responsable.value.trim() || nombre.value.trim() === "") {
        event.preventDefault()
        responsable.classList.add("error");
        document.getElementById("error-responsable").innerText = "Por favor, completa este campo.";
        valido = false;
    } else {
        responsable.classList.remove("error");
        document.getElementById("error-responsable").innerText = "";
    }

    if (!Descripcion.value.trim() || nombre.value.trim() === "") {
        event.preventDefault()
        Descripcion.classList.add("error");
        document.getElementById("error-Descripcion").innerText = "Por favor, completa este campo.";
        valido = false;
    } else {
        Descripcion.classList.remove("error");
        document.getElementById("error-Descripcion").innerText = "";
    }

    // Obtener fuente de vulnerabilidad
    var fuente = "{{ Vulnerabilidad.fuente }}";

    // Validar campos específicos de NMAP
    if (fuente === "NMAP") {
        var camposNmap = ["host", "puerto", "estado_puerto", "servicio", "version_servicio", "sistema_operativo"];

        camposNmap.forEach(function (campo) {
            var input = form.elements[campo];
            var errorDiv = document.getElementById("error-" + campo);

            if (!input.value.trim() || nombre.value.trim() === "") {
                event.preventDefault()
                input.classList.add("error");
                errorDiv.innerText = "Este campo es obligatorio.";
                valido = false;
            } else {
                input.classList.remove("error");
                errorDiv.innerText = "";
            }
        });
    }

    // Validar campos específicos de OWASP ZAP
    if (fuente === "OWASP ZAP") {
        var camposZap = ["url_afectada", "tipo_ataque", "parametros_afectados", "solucion_recomendada"];

        camposZap.forEach(function (campo) {
            var input = form.elements[campo];
            var errorDiv = document.getElementById("error-" + campo);

            if (!input.value.trim() || nombre.value.trim() === "") {
                event.preventDefault()
                input.classList.add("error");
                errorDiv.innerText = "Este campo es obligatorio.";
                valido = false;
            } else {
                input.classList.remove("error");
                errorDiv.innerText = "";
            }
        });
    }

    return valido;
};
