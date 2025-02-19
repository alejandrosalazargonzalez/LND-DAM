// Ejercicio 2

//   1.- Crea un array que se llame toDoList con al menos 5 tareas por hacer
let toDoList = ['lavar losa','tender la ropa','fregar','poner lavadora blanca','invadir polonia']
console.log(toDoList);

//   2.- A través del método indexOF(), encontrar el índice de una de las 5 tareas especificadas en el array
let posicion = toDoList.indexOf('tender la ropa')
console.log(toDoList[posicion])
//   3.- Borrar el ítem del array toDoList que ha sido devuelto por el método indexOf()
toDoList.splice(posicion,1)
console.log(toDoList);
