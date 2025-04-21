const menu = document.querySelector(".menu");
const nav = document.querySelector(".barra_navegacion");
const lis = document.querySelectorAll(".elementos_lista");
const icono = document.querySelector(".ion-icons");

// function Visibilidad(elemento){
//     document.getElementsByClassName('visibles')[0].className = 'ocultos';
//     document.getElementById('cambio'+ elemento).className = 'visibles';
// }

menu.addEventListener('click', () => {
    nav.classList.toggle("ocultar");
    lis.forEach((e) => {
        e.classList.toggle("opacidad");
    });

    icono.forEach((a) => {
        a.classList.toggle("opacidad");
    });

})

// Función para seleccionar/deseleccionar todas las casillas de verificación
function seleccionarTodos() {
    const checkboxes = document.querySelectorAll('.seleccionar');
    const selectAll = document.getElementById('seleccionar_todos');
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAll.checked;
    });
}

toastr.options = {
    "closeButton": true, // Mostrar botón para cerrar
    "debug": false,
    "newestOnTop": true,
    "progressBar": true, // Mostrar barra de progreso
    "positionClass": "toast-top-right", // Posición en la pantalla
    "preventDuplicates": true, // Evitar notificaciones duplicadas
    "onclick": null,
    "showDuration": "300", // Duración del efecto de aparición
    "hideDuration": "1000", // Duración del efecto de desaparición
    "timeOut": "5000", // Tiempo hasta que la notificación se cierre automáticamente
    "extendedTimeOut": "1000", // Tiempo extra para cerrar la notificación
    "showEasing": "swing", // Efecto de aparición
    "hideEasing": "linear", // Efecto de desaparición
    "showMethod": "fadeIn", // Método de aparición
    "hideMethod": "fadeOut" // Método de desaparición
  };
  
  // Notificación con nuevas opciones personalizadas
  toastr.success('¡Vulnerabilidad eliminada correctamente!', 'Éxito');
