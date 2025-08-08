// Escribe un programa que le pida al usuario que ingrese dos numeros, los sume y muestre el resultado de esta suma

const promptsync = require ("prompt-sync")();

// 1. Pida al usuario que ingrese dos números. 

// 2. Sume ambos números. 

// 3. Muestre el resultado de la suma. 


let numero1 = parseFloat (promptsync("Por favor, ingrese un número: "));

let numero2 = parseFloat (promptsync("Por favor, ingrese otro número: "));

    let suma = (numero1 + numero2);

    console.log ("La suma de estos numeros es: " + suma );




