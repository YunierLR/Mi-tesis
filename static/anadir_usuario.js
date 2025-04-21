document.getElementById("usuario_Crud").onsubmit = function(event) {
    let form = document.getElementById("usuario_Crud");
    let nombreCompleto = form.elements["nombre_Completo"];
    let usuario = form.elements["usuario"];
    let correo = form.elements["correo"];
    let contraseña = form.elements["contraseña"];
    let confirmacion = form.elements["confirmacion"];
    let isValid = true;

    // Validación de nombre completo
    if (!nombreCompleto.value.trim()) {
        nombreCompleto.classList.add("error");
        event.preventDefault();
        document.getElementById("error-nombre-completo").textContent = "Por favor, ingrese el nombre completo";
        isValid = false;
    }else if (nombreCompleto.value.trim().length < 2){
        event.preventDefault();
        nombreCompleto.classList.add("error");
        document.getElementById("error-nombre-completo").textContent = "Por favor, ingrese un nombre valido";
        isValid = false;
    }else {
        nombreCompleto.classList.remove("error");
        document.getElementById("error-nombre-completo").textContent = "";
    }

    // Validación de nombre de usuario
    if (!usuario.value.trim()) {
        event.preventDefault();
        usuario.classList.add("error");
        document.getElementById("error-usuario").textContent = "Por favor, ingrese el nombre de usuario";
        isValid = false;
    }else if (usuario.value.trim().length === 1){
        event.preventDefault();
        usuario.classList.add("error");
        document.getElementById("error-usuario").textContent = "El nombre de usuario es muy corto";
        isValid = false;
    } else {
        usuario.classList.remove("error");
        document.getElementById("error-usuario").textContent = "";
    }

    // Validación de correo
    const correoRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!correo.value.trim() || !correoRegex.test(correo.value.trim())) {
        event.preventDefault();
        correo.classList.add("error");
        document.getElementById("error-correo").textContent = "Por favor, ingrese un correo electrónico válido";
        isValid = false;
    } else {
        correo.classList.remove("error");
        document.getElementById("error-correo").textContent = "";
    }

    // Validación de contraseña
    const contraseñaRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!contraseña.value.trim() || !contraseñaRegex.test(contraseña.value.trim())) {
        event.preventDefault();
        contraseña.classList.add("error");
        document.getElementById("error-contraseña").textContent = "La contraseña debe contener al menos 8 caracteres, \nincluyendo al menos una letra mayúscula, \nuna letra minúscula, un número y un símbolo";
        isValid = false;
    } else {
        contraseña.classList.remove("error");
        document.getElementById("error-contraseña").textContent = "";
    }

    // Validación de confirmación de contraseña
    if (confirmacion.value.trim() !== contraseña.value.trim()) {
        event.preventDefault();
        confirmacion.classList.add("error");
        document.getElementById("error-confirmacion").textContent = "Las contraseñas no coinciden";
        isValid = false;
    } else {
        confirmacion.classList.remove("error");
        document.getElementById("error-confirmacion").textContent = "";
    }

    // Evitar el envío del formulario si hay errores
    if (isValid) {
        form.submit()
    }
};

