/**
 * @ @author: alejandrosalazargonzalez
 * @ @version: 1.0.0
 */

// Ejercicio 3

//   1.- Crea la variable numeroSecreto, y hazlo igual a un entero
//   2.- Preguntarle al usuario que adivine el número con un prompt.
//   3.- Si el usuario adivina el numeroSecreto. Si es así, deberá aparecer un alert diciendo que
//       adivinó el número. Tienes que hacer la comparación con un'===', y no te olvides de parsearlo.
//   4.- El algoritmo también debe decir, si el número secreto es más bajo o más alto que el que dijo el usuario
//   5.- Por último, si el usuario no adivina el número, deberá aparecer un mensaje diciendo que se equivocó.

let numeroSecreto = 17
let acertado = true
while (acertado) {
    let numeroAdivinado = Number(prompt('Adivina el numero secreto'))
    if (numeroAdivinado === numeroSecreto) {
        alert('Acertó el numero secreto felicidades')
        acertado = false
    }
    if (numeroAdivinado > numeroSecreto) {
        alert('El numero secreto es más pequeño')
    } else {
        alert('El numero secreto es más grande')
    }
}

