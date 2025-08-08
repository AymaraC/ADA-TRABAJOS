/*Declara una variable global llamada horaActual (puedes asignarle un valor fijo). 
Crea una función declarada llamada mostrarSaludo que imprima "Buenos días" si la hora es menor a 12, 
"Buenas tardes" si es menor a 18, o "Buenas noches" en cualquier otro caso*/

const promptSync = require ("prompt-sync")();

let horaActual = parseFloat (promptSync ("Por favor ingrese la hora actual: "));

function mostrarSaludo (hora){
    if (hora < 12){
        return "¡Buenos días!";
    }else if (hora < 18){
        return  "¡Buenas tardes!";
    } else {
        return "¡Buenas noches!";
    }
    
}
   console.log (mostrarSaludo(horaActual));




