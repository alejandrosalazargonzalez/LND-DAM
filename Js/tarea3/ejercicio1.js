/**
 * @ @author: alejandrosalazargonzalez
 * @ @version: 1.0.0
 */

// ejercicio 1

//  1.- Realizar un algoritmo que pida el nombre de una persona. Si el dato entra vacío, 
//      debe pedir nuevamente al usuarios que introduzca su nombre (No ha introducido ningún nombre)
let nombre = ''
while (nombre== '') {
    nombre = prompt('Ingresa un nombre')
}

//  2. Una vez hecho esto, que se despliegue una alerta de bienvenida con el nombre del usuario.
alert('bienvenido ' + nombre)