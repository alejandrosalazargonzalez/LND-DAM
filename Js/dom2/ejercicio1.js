const toDoList = {
    "tipo de tarea": "Compras",
    dia: "Lunes",
    productos: ["Pan", "Leche", "Huevos"],
    "cantidad de productos": 3,
    estado: "pendiente",
    notificacion: function() {
        alert("Esta tarea tiene una prioridad urgente!");
    }
};

console.log(toDoList.dia);
console.log(typeof toDoList);
console.log(toDoList["cantidad de productos"]);