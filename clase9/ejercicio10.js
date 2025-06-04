/* Pide al usuario que ingrese un número del 1 al 7 y muestra el día correspondiente. Si el número no está dentro 
del rango, muestra el mensaje de error */

let promptsync = require ("prompt-sync")();

let usuario = parseFloat (promptsync ("Por favor ingrese un número del 1 al 7: "))

    if (usuario === 1 ){
        
        console.log ("¡Es Lunes!")
    } 
    else if (usuario === 2) {
        console.log ("¡Es Martes!")
    }
    else if (usuario === 3){
        console.log ("¡Es Miércoles!")
    }
    else if (usuario === 4) {
        console.log ("¡Es Jueves!")
    }
    else if (usuario === 5){
        console.log ("¡Es Viernes!")
    }
    else if (usuario === 6){
        console.log ("¡Es Sábado!")
    }
    else if (usuario === 7){
        console.log ("¡Es Domingo, a descansar!")
    }
    else {
        console.log ("El número ingresado no representa ningún día en la semana.")

    }


