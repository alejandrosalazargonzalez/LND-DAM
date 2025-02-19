// Ejercicio 6

//    1.- Se le pedirá al usuario un número y una vez que lo tengamos se deberá mostrar en pantalla
//          las tablas de dicho número hasta el 10:
//    2.- Se evitará que salga por pantalla el número introducido por el usuario, por si mismo.
let numero = Number(prompt(' introduca un numero'))
for (let i = 0; i < 11; i++) {
    if (i != numero) {
        document.write(numero + "x" + i + "=" + numero * i + "  ")
    }
}