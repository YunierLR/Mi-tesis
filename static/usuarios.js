const menu = document.querySelector(".menu");
const nav = document.querySelector(".barra_navegacion");
const lis = document.querySelectorAll(".elementos_lista");
const icono = document.querySelector(".ion-icons");

function Visibilidad(elemento){
    document.getElementsByClassName('visibles')[0].className = 'ocultos';
    document.getElementById('cambio'+ elemento).className = 'visibles';
}

menu.addEventListener('click', () => {
    nav.classList.toggle("ocultar");
    lis.forEach((e) => {
        e.classList.toggle("opacidad");
    });

    icono.forEach((a) => {
        a.classList.toggle("opacidad");
    });

})

// Obtener la lista de enlaces
const links = document.querySelectorAll('.elementos_lista');
                
// Iterar sobre cada enlace
links.forEach(link => {
    // Agregar un evento de clic a cada enlace
    link.addEventListener('click', () => {
        // Obtener el texto del enlace
        const ubicacion = link.innerText;
        // Actualizar el contenido del elemento <h5> con la ubicación actual
        document.getElementById('ubicacion_actual').innerText = ubicacion;
    });
});

