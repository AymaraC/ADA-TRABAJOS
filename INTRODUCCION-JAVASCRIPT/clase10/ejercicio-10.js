/*Escribe un programa que calcule el precio final de un producto después de aplicar un descuento. 
Pide al usuario que ingrese el precio original y el porcentaje de descuento, y muestra el precio final.*/

let promptsync = require("prompt-sync")();

let precio = parseFloat (promptsync("Ingrese el precio de la prenda: "));
let porcentajeDescuento = parseFloat (promptsync("Coloque el porcentaje de descuento: "));

let montoDescuento = precio*(porcentajeDescuento/100);

let precioFinal= (precio - montoDescuento);

console.log ("El monto final a pagar es: ", precioFinal);