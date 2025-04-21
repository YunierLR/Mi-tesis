document.getElementById('cambiar_password_form').addEventListener('submit', function(event) {
    const passwordActual = document.getElementById('password_actual');
    const nuevaPassword = document.getElementById('nueva_password');
    const confirmarNuevaPassword = document.getElementById('confirmar_nueva_password');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;

    let isValid = true;

    if (!passwordActual.value.trim()) {
        setError('password_actual', 'Contraseña actual requerida');
        isValid = false;
    } else {
        clearError('password_actual');
    }

    if (!nuevaPassword.value.trim()) {
        setError('nueva_password', 'Nueva contraseña requerida');
        isValid = false;
    } else if (!passwordRegex.test(nuevaPassword.value.trim())) {
        setError('nueva_password', 'La contraseña debe tener al menos 8 caracteres y contener \nal menos una letra minúscula, una letra mayúscula, \nun número y un carácter especial');
        isValid = false;
    } else {
        clearError('nueva_password');
    }

    if (!confirmarNuevaPassword.value.trim()) {
        setError('confirmar_nueva_password', 'Confirmación de contraseña requerida');
        isValid = false;
    } else if (confirmarNuevaPassword.value.trim() !== nuevaPassword.value.trim()) {
        setError('confirmar_nueva_password', 'Las contraseñas no coinciden');
        isValid = false;
    } else {
        clearError('confirmar_nueva_password');
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function setError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.getElementById('error-' + inputId);
    inputElement.classList.add('error');
    errorElement.innerText = message;
}

function clearError(inputId) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.getElementById('error-' + inputId);
    inputElement.classList.remove('error');
    errorElement.innerText = '';
}
