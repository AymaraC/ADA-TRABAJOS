/*Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. 
Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. 
(Pueden desglosar en pasos el código si eso les facilita su desarrollo)*/

const promptsync = require ("prompt-sync")();

let nombres = []
    for (let i = 0; i <= 4; i++){
        
        let usuario = promptsync("Ingrese cinco nombres: ");
        nombres[i] = usuario
    }
        console.log (nombres)
let usuario1 = promptsync ("Ingresa un nombre ya hayas ingresado: ")
    for (let j = 0; j <= 4; j++){

        if (usuario1 === nombres [j]){
        console.log ("El nombre se encuentra en la lista")
    } else {
        console.log ("El nombre no se encuentra en la lista")
    }
    }

    
        
        
