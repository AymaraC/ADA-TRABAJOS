/*Consigna: 
Vamos a programar un semáforo. Escribe un programa que le pida al usuario ingresar un color del semáforo: rojo, 
amarillo o verde. Dependiendo del color ingresado, el programa debe imprimir un mensaje con la acción correspondiente:
Rojo: "Alto, no puedes avanzar." 
Amarillo: "Precaución, prepárate para avanzar." 
Verde: "Avanza con seguridad." 
Si el usuario ingresa un color inválido, el programa debe mostrar un mensaje: "Color no reconocido, ingresa rojo, amarillo o verde." 
Utiliza un switch para resolver este ejercicio.*/

const promptsync = require("prompt-sync")();

let usuario = promptsync("Elija un color entre rojo, amarillo y verde: ").toLowerCase();

    switch (usuario){

     case "rojo":
        console.log ("¡Alto! No puedes avanzar.");
        break;
     case "amarillo":
        console.log ("¡Precaución! Prepárate para avanzar.");
        break;
     case "verde":
        console.log ("Avanza con seguridad.");
        break;
     default:
        console.log ("Color no reconocido, ingresa rojo, amarillo o verde.");
    }

