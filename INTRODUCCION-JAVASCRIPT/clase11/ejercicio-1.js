//Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida al usuario un número cualquiera. 
// El programa deberá analizar si el número ingresado es positivo, negativo o cero. Utiliza estructuras if para resolverlo 
// y muestra un mensaje explicativo en cada caso. //

let promptsync = require("prompt-sync")();

let usuario = parseFloat (promptsync("Ingrese un número: "));
    
    if (usuario > 0) {

    console.log ("El número ingresado es positivo.")

}     else if (usuario < 0) {

    console.log ("El número ingresado es negativo.")
}   else {
        
    console.log ("El número es 0.")
    
    }
    

        
    
    