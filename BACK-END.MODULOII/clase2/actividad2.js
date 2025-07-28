/*Crea un objeto en JavaScript que represente a un estudiante con las 
siguientes propiedades: nombre, edad, curso, notas (un array de 
números). 
Instrucciones: 
• Convierte este objeto a una cadena JSON usando JSON.stringify(). 
• Muestra la cadena JSON en la consola. 
• Luego, convierte la cadena JSON de nuevo a un objeto utilizando 
JSON.parse() y muestra el objeto en la consola.*/

let estudiante = {
    nombre : "Juan Martin" ,
    edad : 17 ,
    curso : "B" ,
    notas: [10, 8, 6, 10, 8, 7, 10],
};

let jsonString = JSON.stringify(estudiante)     // Convertimos el objeto "estudiante" a una cadena de texto en formato JSON.
console.log (`Información del estudiante: ${JSON.stringify(estudiante)}`);

let objeto = JSON.parse(jsonString)     //Convertimos ese texto (jsonString) de nuevo a un objeto real de JavaScript

console.table (objeto)