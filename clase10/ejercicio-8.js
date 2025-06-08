//* Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit. 
// Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
// Investiga que es ParseFloat, ya que el ejercicio lo requiere
// La fórmula puede representarse asi: let fahrenheit = celsius * 9 / 5 + 32; */

let promptsync = require("prompt-sync")();

let usuario = promptsync("Por favor ingrese la temperatura actual: ") ;

let Fahrenheit = (parseFloat(usuario) * 9 / 5 + 32); //ParseFloat convierte un string en número decimal

console.log ("La temperatura en Farenheit es de: " + Fahrenheit);


