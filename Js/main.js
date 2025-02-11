
/**let name;
let age;
name = prompt('Escribir un nombre');
age = prompt('Escriba su edad');
document.write('Hola ');
document.write(name);
document.write(" asi que tienes ");
document.write(age)
document.write('años')

function calculdora(a, b, operacion) {
    switch (operacion) {
        case "suma":
            return a + b;
        case "resta":
            return a - b;
        case "multiplicacion":
            return a * b;
        case "division":
            if (b === 0) {
                return console.log('El divisor no puede ser 0')
            }
            return a / b;
        default:
            console.log('la Operacion no es valida')
            break;
    }
}
calculdora()
let numero1 = prompt('Inserta un numero');
let numero2 = prompt('Ingresa otro numero');
let operacion = prompt('¿Que operacion quieres realizar?');
let solucion;
document.write('El resultado es: ',calculdora(numero1,numero2,operacion));
**/
let num1 = prompt('inserta un numero');
let num2 = prompt('otro numero');
function pares(num1,num2) {
    let nums=[];
    for (let i = num1; i < num2; i++){
        if (i%2===0) {
            nums.push(i);
        }
    }
    return nums;
}
document.write('pares: ', pares(num1,num2));

function impares(num1,num2) {
    let nums=[];
    for (let i = num1; i < num2; i++){
        if (i%2!=0) {
            nums.push(i);
        }
    }
    return nums;
}
document.write(' imparespares: ', impares(num1,num2));

function tabla(a){
    let nums=[];
    for (let i = 0; i < 10; i++){
        result = a*i
        if (i%5!=0) {
            document.write('$a*$i = $result')
        }
    }
    return nums;
}
tabla(num1)