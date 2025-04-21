// Validacion de Login

document.getElementById("iniciar_sesion").onsubmit = function(event) {
    let form = document.getElementById("iniciar_sesion");
    let usuario = form.elements["usu"];
    let contrasena = form.elements["clave"];
    let isValid = true;

    if (!usuario.value.trim()) {
        event.preventDefault();
        usuario.classList.add("error");
        document.getElementById("error_usu").innerText = "Usuario requerido";
        isValid = false;
    } else {
        usuario.classList.remove("error");
        document.getElementById("error_usu").innerText = "";
    }

    if (!contrasena.value.trim()) {
        event.preventDefault();
        contrasena.classList.add("error");
        document.getElementById("error_clave").innerText = "Contraseña requerida";
        isValid = false;
    } else {
        contrasena.classList.remove("error");
        document.getElementById("error_clave").innerText = "";
    }

    if (isValid) {
        form.submit();
    }
}