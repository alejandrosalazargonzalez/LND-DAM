
// Ejercicio 3

//   1.- Crear un array, edades, con al menos ocho edades distintas
let edades = [1,26,32,15,47,71,99,20]

//   2.- Recorrer el array, y obtener el promedio de las edades con dos decimales (método toFixed())
let total = 0
for (let index = 0; index < edades.length; index++) {
    total += edades[index];
}
total = total/edades.length
console.log(total.toFixed(2))
