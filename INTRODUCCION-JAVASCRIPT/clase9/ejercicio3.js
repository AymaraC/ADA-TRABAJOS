/* Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que ingrese dos valores booleanos
(true o false) y muestra el resultado de diversas combinaciones lógicas. */

const promptsync = require("prompt-sync")();
let condicion1= true; // Declaro dos variables booleanas//
let condicion2 = false;

let condicion3 = promptsync("Ingrese un valor booleano (true/false): ").toLowerCase(); //Le pido al usuario que ingrese dos valores booleanos//
let condicion4 = promptsync("Ingrese un valor booleano (true/false): ").toLowerCase();    

condicion3 = (condicion3 === "true") //Para que me convierta el string a booleano//
condicion4 = (condicion4 === "true")

console.log ("La condición 1 es: ")
console.log (condicion1)
console.log ("La condición 2 es: ")
console.log (condicion2)

console.log ("La condicion 3 es: ")
console.log (condicion3)
console.log ("La condición 4 es: ")
console.log (condicion4)

console.log ("Respuestas: ")
console.log ("condicion3 && condicion4")
console.log (condicion3 && condicion4) // Mostrar en la consola distintas combinaciones//
console.log ("condicion4 || condicion3")
console.log (condicion4 || condicion3)
console.log ("condicion3 != condicion4")
console.log (condicion3 != condicion4)
console.log ("condicion3 === condicion4")
console.log (condicion3 === condicion4)
console.log ((condicion1 || condicion4) && (condicion3 === condicion2))

         /*   (   true      o  true  )    y   (   false  es igual a false)
                    true                            true */
