/*Crea un script que convierta una cantidad de dinero de dólares a euros.
Usa readline-sync para solicitar la cantidad en dólares y muestra el resultado en euros (1 dólar = 0.85 euros).*/

const readlineSync = require('readline-sync');

const usuario = readlineSync.questionFloat('¡Bienvenido a nuestro conversor de dinero! Ingrese el monto que desea convertir: ');

const resultado = usuario * 0.85

console.log(`El monto de ${usuario} equivale a ${resultado.toFixed(2)} euros.`);










































