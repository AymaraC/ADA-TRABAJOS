/*Crea una función expresada llamada encontrarMayor que reciba dos 
números como parámetros y devuelva el número mayor.*/

const promptSync = require("prompt-sync")();

let num1 = parseInt (promptSync("Ingrese un número entero: "));
let num2 = parseInt (promptSync("Ingrese otro número: "));

let encontrarMayor = function (num1, num2){
    if (num1 < num2){
        return num2 + " es mayor que " + num1
    } else if (num1 > num2){
        return num1 + " es mayor que " + num2

    } else {
        return "Ambos números son iguales."
    }
}

console.log (encontrarMayor(num1,num2));