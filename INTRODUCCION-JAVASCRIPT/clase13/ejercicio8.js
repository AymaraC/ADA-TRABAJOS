/*Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba 
una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.*/

const PromptSync = require("prompt-sync")();

let usuario =parseFloat(PromptSync("Ingrese la temperatura actual: "));


let convertirCelsiusAFahrenheit = function (Celsius){
    return (Celsius * 9/5) + 32

}

    console.log ("La temperatura en Fahrenheit es de "+ (convertirCelsiusAFahrenheit(usuario)));


