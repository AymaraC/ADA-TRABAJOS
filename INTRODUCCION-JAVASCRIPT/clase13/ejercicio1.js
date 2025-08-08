/*Crea una función declarada llamada calcularAreaTriangulo que reciba dos 
parámetros: la base y la altura de un triángulo. La función debe devolver el 
área del triángulo. */

const promptsync = require ("prompt-sync")();

function calcularAreaTriangulo (base, altura) {
   return  (base*altura) / 2;
}
let base = promptsync ("Ingrese el valor de la base: ");
let altura = promptsync ("Ingrese la altura del triángulo: ");

console.log ("El área del triangulo es: " + calcularAreaTriangulo (base, altura));



