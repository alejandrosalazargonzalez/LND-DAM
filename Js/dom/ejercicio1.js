// Ejercicio 1

// Lanzamientos de dados

// Vamos a practicar como programar un evento, en esta ocasión haremos uso del más simple de ellos; el evento click.

//     En el archivo HTML crea un botón con el texto tirar dados. Define el atributo onclick="tirarDados()" al botón.
//     En el archivo JS declara una función tirarDados(). Esta se ejecutara cada vez que se haga click en el botón tirar dados.
//     Codea dentro del bloque de la función, el lanzamiento aleatorio a través de un math.ramdom (pregúntale a San Google como funciona).
function tirarDados(params) {
    let salida = Math.random()*10
    alert(salida.toFixed(0))
}