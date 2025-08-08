/*Consigna: 
Crea un programa que le pida al usuario un número positivo. 
El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. 
Usa un ciclo for para realizar la tarea.*/

const promptsync = require("prompt-sync")();

let usuario = parseInt (promptsync("Ingrese un número: "));

for (let contar = 1 ; contar <= usuario ; contar ++ ){
    console.log ("Contando " + contar)
};