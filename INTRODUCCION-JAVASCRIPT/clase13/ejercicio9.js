/*Crea una función declarada llamada contarHasta que reciba un número y 
use un bucle para imprimir todos los números desde 1 hasta ese número. */

const promptSync = require ("prompt-sync")();

let usuario = parseInt (promptSync("Ingrese un número: "));

function contarHasta (numeroIngresado){
    for (i = 1; i <= numeroIngresado; i++){
        console.log (i);
    }
    

}
(contarHasta(usuario));


