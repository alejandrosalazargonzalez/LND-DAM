// Ejercicio 3

//     Crear una función que se llame facturacion() .
//     La función tiene que recibir como parámetro el monto de un producto , y el medio de pago :
// C (tarjeta de crédito), E (efectivo) y D (tarjeta de débito). Si el monto del producto es menor
// a $200 no se aplicará ningún descuento. Si el monto a abonar es entre $200 y $400 se aplicará un
// descuento del 30% si el medio de pago es efectivo, 20% si se realiza con debito y 10% con tarjeta
// de crédito. Para montos mayores a $400, el descuento es 40% sin importar el medio de pago.

function facturacion(precio, medioPago) {
    switch (medioPago) {
        case 'C':
            if (precio<200) {
                alert('Tiene que pagar un total de: ' + precio)
            }
            if (200 < precio && precio < 400) {
                let descuento = precio - precio * 0.10
                alert('Tiene que pagar un total de: ' + descuento)
                
            }
            if (400 < precio) {
                let descuento = precio - precio * 0.40
                alert('Tiene que pagar un total de: ' + descuento)
            }
            break;
        case 'E':
            if (precio<200) {
                alert('Tiene que pagar un total de: ' + precio)
            }
            if (200 < precio && precio < 400) {
                let descuento = precio - precio * 0.30
                alert('Tiene que pagar un total de: ' + descuento)
            }
            if (400 < precio) {
                let descuento = precio - precio * 0.40
                alert('Tiene que pagar un total de: ' + descuento)
            }
            break;
        case 'D':
            if (precio<200) {
                alert('Tiene que pagar un total de: ' + precio)
            }
            if (200 < precio && precio < 400) {
                let descuento = precio - precio * 0.20
                alert('Tiene que pagar un total de: ' + descuento)
            }
            if (400 < precio) {
                let descuento = precio - precio * 0.40
                alert('Tiene que pagar un total de: ' + descuento)
            }
            break;
        default:
            alert('algo fallo')
            break;
    }
}
//     La función deberá retornar el monto final a abonar.
let precio = Number(prompt('Introduzca el precio del producto'))
let medioPago = prompt('Intoduzca forma de pago:C (tarjeta de crédito), E (efectivo) y D (tarjeta de débito)')
facturacion(precio,medioPago)