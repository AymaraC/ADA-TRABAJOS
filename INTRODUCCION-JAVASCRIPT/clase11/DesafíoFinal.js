//Pregunte tu nombre
//Te dé la bienvenida
//Pregunte tu edad
//Use if ternario para determinar si sos mayor de edad
//Use switch para mostrar un mensaje según tu comida favorita

const promptsync = require("prompt-sync")();

let nombre = promptsync ("¡Hola!😀¿Cómo te llamas? ");
    console.log (`¡Bienvenido ${nombre}!`);

let edad = parseInt (promptsync("¿Cuántos años tenes? "));
let acceso = edad >= 18 ? "Sos mayor de edad" : "No sos mayor de edad";
    console.log (acceso)

let comida = promptsync("¿Cuál comida preferís? Asado, Pizza o Empanadas: ").trim().toLowerCase();
    switch (comida){
        case "asado":
            console.log ("¡La comida que nos representa en el mundo!🌐")
        break;
        case "pizza":
            console.log ("Uff, que rico. Mi favorita es la de Fugazzetta.🍕")
        break;
        case "empanadas":
            console.log ("¡Muy rico! Aguanten las del norte.")   
        break;
        default:
            console.log ("¡Esa comida no la conozco!")
    }

        
