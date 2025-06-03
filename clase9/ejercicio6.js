/* Pide al usuario que introduzca su edad y verifica si es mayor o no edad. Muestra un mensaje personalizado
según el caso*/

let promptsync = require("prompt-sync")(); 

let edad = parseInt(promptsync ("Ingrese su edad: "))

    if (edad >= 18){
        console.log ("Usted es mayor de edad, ya puede conducir")
    
    }else{
       console.log ("Usted no es mayor de edad, no puede conducir")
    }

