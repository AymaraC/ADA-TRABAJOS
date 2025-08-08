
const PromptSync = require("prompt-sync")();
/*1. Crea una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA, 
a las cuales les asignarás los valores numéricos 18 y 99 respectivamente. */
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;
//Pide al usuario que ingrese su edad y utiliza el parsInt para convertir la entrada del usuario en un número entero.//

let usuario = parseInt (PromptSync("Por favor ingrese su edad: ")) 

//Valida si la edad ingresada está dentro del rango permitido y muestra un mensaje adecuado.//

    if ((usuario >= EDAD_MINIMA) && (usuario <= EDAD_MAXIMA )){

    console.log ("Usted puede ser encuestado.") } 
    
    else {

            console.log ("Usted no puede ser encuestado.");
        }


