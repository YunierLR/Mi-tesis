// Validacion de registro

document.getElementById("registrarse").onsubmit = function(event) {

    let form = document.getElementById("registrarse");
    let nombre = form.elements["registrar_nombre"];
    let usuario = form.elements["registrar_usuario"];
    let correo = form.elements["registrar_correo"];
    let contrasena = form.elements["registrar_contrasena"];
    let confirm_contrasena = form.elements["confirmar_contrasena"];

    let isValid = true;

    // Validación de nombre
    if (!nombre.value.trim()) {
        event.preventDefault();
        nombre.classList.add("error");
        document.getElementById("error-nom_nom").innerText = "Nombre requerido";
        isValid = false;


    } else if (nombre.value.trim().length === 1) {
        nombre.classList.add("error");
        event.preventDefault();
        document.getElementById("error-nom_nom").innerText = "El nombre no es valido";
        isValid = false;
    } else {
        nombre.classList.remove("error");
        document.getElementById("error-nom_nom").innerText = "";
    }

    
    if (!usuario.value.trim()) {
        event.preventDefault();
        usuario.classList.add("error");
        document.getElementById("error-nom_usu").innerText = "Nombre de usuario requerido";
        isValid = false;
    } else if (usuario.value.trim().length === 1) {
        usuario.classList.add("error");
        event.preventDefault();
        document.getElementById("error-nom_usu").innerText = "El nombre de usuario debe tener al menos 2 caracteres";
        isValid = false;
    } else {
        usuario.classList.remove("error");
        document.getElementById("error-nom_usu").innerText = "";
    }
    

    // Validación de correo
    if (!correo.value.trim()) {
        event.preventDefault();
        correo.classList.add("error");
        document.getElementById("error-corr_usu").innerText = "Correo electrónico requerido";
        isValid = false;
    } else if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(correo.value.trim())) {
        event.preventDefault();
        correo.classList.add("error");
        document.getElementById("error-corr_usu").innerText = "El correo electrónico no es válido";
        isValid = false;
    } else {
        correo.classList.remove("error");
        document.getElementById("error-corr_usu").innerText = "";
    }

    if (!contrasena.value.trim()) {
        event.preventDefault();
        contrasena.classList.add("error");
        document.getElementById("error-cont_usu").innerText = "Contraseña requerida";
        isValid = false;
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}/.test(contrasena.value.trim())) {
        event.preventDefault();
        contrasena.classList.add("error");
        document.getElementById("error-cont_usu").innerText = "La contraseña debe contener al menos 8 caracteres, \nincluyendo al menos una letra mayúscula, \nuna letra minúscula, un número y un carácter especial";
        isValid = false;
    } else {
        contrasena.classList.remove("error");
        document.getElementById("error-cont_usu").innerText = "";
    }

    // Validación de confirmación de contraseña
    if (!confirm_contrasena.value.trim()) {
        event.preventDefault();
        confirm_contrasena.classList.add("error");
        document.getElementById("error-confirm_cont").innerText = "Confirmación de contraseña requerida";
        isValid = false;
    } else if (confirm_contrasena.value.trim() !== contrasena.value.trim()) {
        event.preventDefault();
        confirm_contrasena.classList.add("error");
        document.getElementById("error-confirm_cont").innerText = "Las contraseñas no coinciden";
        isValid = false;
    } else {
        confirm_contrasena.classList.remove("error");
        document.getElementById("error-confirm_cont").innerText = "";
    }

    // Si el formulario es válido, se envía
    if (isValid) {
        form.submit();
    }
};



