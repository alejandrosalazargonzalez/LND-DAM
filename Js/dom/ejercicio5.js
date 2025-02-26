const miBoton = document.querySelector("button");

function fondo() {
    if ( miBoton.textContent != 'Desactivado') {
        miBoton.textContent = 'Desactivado';
    } else {
        miBoton.textContent = 'Activar';
    }
    miBoton.style.backgroundColor = 'gray';

}

function sobreBoton() {
    miBoton.style.backgroundColor = 'green';
}

function fueraBoton() {
    miBoton.style.backgroundColor = 'red';
}

miBoton.addEventListener('click',fondo );
miBoton.addEventListener('mouseenter', sobreBoton );
miBoton.addEventListener('mouseleave', fueraBoton );

