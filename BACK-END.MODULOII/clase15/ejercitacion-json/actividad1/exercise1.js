/*Objetivo: Crear un objeto JSON simple y mostrarlo en la consola.
1. Crea un archivo llamado exercise1.js.
2. Define un objeto JSON que represente a una persona (incluye campos como nombre, edad, y email).
3. Convierte el objeto JSON a una cadena y muéstralo en la consola.*/

const persona = {
    "nombre" : "Aymara",
    "edad": "27",
    "email" : "aymaracabanal@gmail.com"
};

const jsonCadena = JSON.stringify(persona); //Pasa de objeto JS a string JSON
console.log(persona);












