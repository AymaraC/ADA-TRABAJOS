/*Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una 
función flecha para calcular el precio final. */

const promptSync = require("prompt-sync")();

let precio = parseFloat (promptSync ("Ingrese el precio del producto a calcular: "));
let porcentaje = parseFloat (promptSync ("Ingrese el porcentaje IVA: "));


let calcularPrecioFinal = (precio, porcentaje) => precio + (precio*porcentaje / 100);

let resultado = calcularPrecioFinal (precio,porcentaje);
console.log ("El total a pagar es $" + resultado); 




