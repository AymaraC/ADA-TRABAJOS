// Crear un programa que le pida al usuario que escriba tres números y determinar cuál es el mayor //

let promptsync = require("prompt-sync")();

let numero1 = parseInt (promptsync("Ingrese el primer número: "))
let numero2 = parseInt (promptsync("Ingrese el segundo número: "))
let numero3 = parseInt (promptsync("Ingrese el tercer número: "))

    if ((numero1 > numero2) && (numero3 < numero1)) {
        console.log ("El primer número es el mayor")
    }else if (numero2 > numero1 && numero3 < numero2){
        console.log ("El segundo número es el mayor")
    } else 
        console.log ("El tercer número es el mayor")
        

