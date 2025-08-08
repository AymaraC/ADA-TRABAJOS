/*Solicita al usuario la cantidad de productos comprados y el precio unitario. 
Usa una función flecha para calcular el total con descuento según la 
cantidad.*/

const promptSync = require ("prompt-sync")();

let cantidad = parseInt(promptSync("Ingrese por favor la cantidad de productos que compró: "));
let precio = parseFloat(promptSync("Ingrese el precio unitario del producto: "));

let precioConDescuento = (cantidad,precio) =>{
let totalSinDescuento = cantidad * precio           // Esta función calcula el total con descuento según la cantidad.
let descuento = 0;                                  // Cuanto se va a restar

    if (cantidad <= 10){
       descuento = 0
    }else if (cantidad <= 20){
        descuento = totalSinDescuento * 0.1
    } else {
        descuento = totalSinDescuento * 0.2
    }
    return totalSinDescuento - descuento;                   // Precio final con descuento
}
   
console.log("El total a pagar es: $" + precioConDescuento(cantidad, precio).toFixed(2));




