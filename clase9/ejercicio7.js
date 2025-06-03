/* Pide al usuario que ingrese su peso y conviertelo a libras. Muestra un mensaje.*/

let promptsync = require("prompt-sync")();

let peso = parseFloat (promptsync ("Ingrese su peso: "))
    
peso = (peso*2.20462)
console.log ("Su peso convertido a libras es: " + peso)