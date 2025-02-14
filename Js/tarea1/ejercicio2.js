/**
 * @ @author: alejandrosalazargonzalez
 * @ @version: 1.0.0
 */

//Ejercicio 2

//1.- En nuestro archivo HTML vamos a vincular el fichero script.js

//2.- Dentro del archivo script.js, vamos a declarar las variables nombre
// y apellido que habíamos declarado en la consola. Pero esta vez, mediante
// el método prompt, para que sea el usuario quién introduzca los datos, nombre y apellido
let nombre = prompt('Intrude tu nombre')
let apellido = prompt('Introduce tu apellido')

//3.- Mostrar una alerta de bienvenida a nuestra página web con el nombre
// y el apellido del usuario, "Bienvenido a a nuestra página (nombre + apellido)
alert('Bienvenido a a nuestra página ' + nombre + ' ' + apellido)