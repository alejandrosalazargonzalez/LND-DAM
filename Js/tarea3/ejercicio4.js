/**
 * @ @author: alejandrosalazargonzalez
 * @ @version: 1.0.0
 */

// Ejercicio 4

//  1.- Crea un algoritmo utilizando el operador ternario que le pregunte al usuario cuántos copas a tomado
let copas = prompt('¿Cuantas copas ha tomado?')
let respuestaMala = 'No puedes conducir'
let respuestaBuena = 'Nos alegra que seas un conductor responsable.'
//   2.- Si el número de copas es mayor que cero, debe emitir una alert que diga que no puede conducir.
//   3.- Si el usuario indica que no ha tomado ninguna copa, entonces decirle "Nos alegra que seas
//       un conductor responsable.
alert(copas > 0 ? respuestaMala : respuestaBuena)