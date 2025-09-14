/*Objetivo: Convertir una cadena JSON a un objeto y acceder a sus propiedades.
-Crea un archivo llamado exercise3.js.
-Define una cadena JSON que represente a un libro (incluye campos como title, author, y year).
-Convierte la cadena JSON a un objeto y muestra cada propiedad en la consola.*/

const libro = '{"title": "Muchas vidas, muchos maestros", "author":"Brian Weiss", "year":"1988"}'; //Agregue las comillas así queda como string

const objeto = JSON.parse(libro) //Lo paso a objeto JavaScript 
console.log(objeto); 












