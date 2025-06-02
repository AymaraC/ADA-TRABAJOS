/* Escribe un programa que le pida al usuario que ingrese un numero, determina si ese numero es par o impar 
y muestra el mensaje diciendo el resultado

 1. Solicite al usuario que ingrese un número entero. 
 2. Determine si el número es par o impar. 
 3. Muestre un mensaje indicando si el número es par o impar. 
 */

const promptsync = require ("prompt-sync")({ sigint: true });;

let numero = promptsync ("Por favor ingrese un numero que no sea decimal: ")

let numeroentero = parseInt (numero)

    if (numeroentero % 2 === 0){
        console.log("Tu número es par")

    }
    else {
        console.log("Tu numero es impar")
    };
