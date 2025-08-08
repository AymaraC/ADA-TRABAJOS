
const promptsync = require("prompt-sync")();

//Crea un programa que le pida al usuario un número//
let usuario = parseInt (promptsync("Ingrese un número: "));

//luego imprima su tabla de multiplicar desde el 1 hasta el 10. Usa un ciclo for.//
for (let contar = 1 ; contar <= 10 ; contar ++ ){
    console.log (usuario * contar)
};