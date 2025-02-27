let usuario = document.querySelector('#usuario');
let nombre = document.querySelector('#nombre');
let email = document.querySelector('#email');

let enviar = document.getElementById('enviar');

enviar.addEventListener('click', mostrarTexto);

// Función para mostrar los datos ingresados en un alert
function mostrarTexto() {
    alert(`Estos fueron los datos ingresados:
            Usuario: ${usuario.value}
            Nombre: ${nombre.value}
            Mail: ${email.value}`);
}
