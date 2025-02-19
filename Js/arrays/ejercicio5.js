// Ejercicio 5

//   1.- Declara un array de nombres, y rellénalo con al menos 5 nombres..
let nombres = ['Fran','Nico','Harby','Alexander','Barbara']

let nombre = nombres[1]
//   2.- Obtén el nombre más largo del array nombres
for (let element of nombres) {
    if (element.length > nombre.length) {
        nombre = element
    }
}
console.log(nombre)