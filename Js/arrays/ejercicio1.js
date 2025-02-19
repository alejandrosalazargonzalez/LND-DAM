

// Ejercicio 1

//   1.- Declara un array llamado ensaladaDeFrutas con manzana, plátano, piña, naranja, kiwi.
let ensaladaDeFrutas = ['manzana', 'plátano', 'piña', 'naranja', 'kiwi']

//   2.- Imprime dicho array por consola
console.log(ensaladaDeFrutas)

//   3.- Recorre el array anterior, con un for, imprimiendo cada una de las frutas.
for (let index = 0; index < ensaladaDeFrutas.length; index++) {
    console.log(ensaladaDeFrutas[index])
}

//   4.- Ahora recórrelo con un for...of...
for (let fruta of ensaladaDeFrutas) {
    console.log(fruta)
}
