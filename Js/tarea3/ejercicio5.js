/**
 * @ @author: alejandrosalazargonzalez
 * @ @version: 1.0.0
 */

// Ejercicio 5

//   1.- Se le pedirá al usuario dos números para generar la suma, resta, división y multiplicación
let numero1 = Number(prompt('introduce un numero '))
let numero2 = Number(prompt('Introduce otro numero'))

//   2.- Preguntar al usuario que operación quiere realizar, antes de que ingrese los datos a operar
let operacion = prompt('¿Que operacion quieres realizar?')
//   3.- Si el usuario no ingresa ninguna respuesta, automáticamente informarle que debe introducir un dato
let resultado
switch (operacion) {
    case 'sumar':
        resultado = numero1 + numero2
        alert(`Resultado de la suma = ${resultado}`)
        break;
    case 'restar':
        resultado = numero1 - numero2
        alert(`Resultado de la resta = ${resultado}`)
        break;
    case 'dividir':
        if (numero2 === 0) {
            alert('no se puede dividir entre cero')
        }else{
            resultado = numero1 / numero2
            alert(`Resultado de la divicion = ${resultado}`)
        }

        break;
    case 'multiplicar':
        resultado = numero1 * numero2
        alert(`Resultado de la multiplicacion = ${resultado}`)
        break;
    default:
        alert('no es una operacion')
        break;
}

