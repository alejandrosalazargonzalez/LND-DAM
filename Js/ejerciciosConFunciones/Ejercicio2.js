// Ejercicio 2

//     1. Declara una función que se llama calculoMayor() y pasale como parámetros (num1,num2)
//     2. Dentro de la función muestra una alerta que diga cuál de los números ingresados es mayor. En caso de ser iguales, tendrá que indicarlo a través de una alerta también..
function calculoMayor(num1,num2) {
    if (num1 === num2) {
        alert(num1 + ' es el mismo numero que ' + num2)
    }
    if (num1 < num2) {
        alert(num2 + ' es mayor a ' + num1)
    } else {
        alert(num1 + ' es mayor a ' + num2)        
    }
}

//     3. num1 y num2 deben ser previamente introducidos por el usuario.
let num1 = Number(prompt('Introduzca un numero'))
let num2 = Number(prompt('Introduzca otro numero'))

//     4. Invoca a la función.
calculoMayor(num1,num2)