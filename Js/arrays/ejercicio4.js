// Ejercicio 4

//   1.- Crea un array vacío que se llame listaSuper
let listaSuper = []

//   2.- Pedirle al usuario que ingrese cinco productos, para llenar la lista del super.
while (listaSuper.length < 5) {
    let ingresar = prompt('ingrese 5 productos profavor')
    listaSuper.push(ingresar)
}
//   3.- Muestra por consola los productos introducidos por el usuario
console.log(listaSuper)

