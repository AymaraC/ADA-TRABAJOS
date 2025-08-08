/*Crea una función declarada llamada esPar que reciba un número y devuelva 
"Es par" si el número es par o "Es impar" si el número es impar. Usa una 
variable local para guardar el resultado. */

const promptsync = require ("prompt-sync")();

let usuario = parseInt (promptsync("Ingrese un número: "));//

function esPar (numeroPar) {

let numero = 0;
    if (numeroPar % 2 === 0){
        numero = "El número es par."
    }else {
       numero = "El número es impar."
    }
        return numero
}
    console.log (esPar(2)); 
