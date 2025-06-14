
const promptsync = require("prompt-sync")();

/*Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, 
multiplicación o división.*/
let numero1= parseFloat (promptsync("Ingrese un número: "));
let numero2= parseFloat (promptsync("Ingrese un número: "));
let operación = promptsync("Elige una operación. Estas pueden ser suma, resta, multiplicación o división: ").toLowerCase().trim();

// Según la operación ingresada, el programa deberá calcular y mostrar el resultado. 
// Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error.
    switch (operación){
        case "multiplicacion":
            console.log ("El resultado de su multiplcación es: "+(numero1*numero2));
            break;
        case "division":
            if (numero2 === 0){
            console.log ("No se puede dividir por 0. Elija otro número.");
            } else {
            console.log ("El resultado de su división es: "+(numero1/numero2));
            }
            break;
        case "suma":  
            console.log ("El resultado de la suma es: "+(numero1+numero2));
            break;
        case "resta":
            console.log ("El resutaltado de la resta es: "+(numero1-numero2));
            break;
        default :
            console.log ("Esa operación no es válida.");
    }
