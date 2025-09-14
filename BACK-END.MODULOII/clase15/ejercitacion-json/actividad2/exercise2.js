/*Objetivo: Leer datos de un archivo JSON, modificarlos y guardarlos nuevamente.
Lee el archivo data.json, modifica el campo age a un nuevo valor, y guarda el archivo modificado*/

import fs from 'fs';

//Leemos el archivo JSON
const leer = fs.readFileSync('data.json', 'utf-8'); //Devuelve el contenido como string JSON

//Convertimos el objeto JSON a JS
const persona = JSON.parse(leer); //Por cambiar de nuevo a JS podemos hacer el persona.age
console.log(persona);

//Asignamos nueva edad
persona.age = 42;       //Cambiamos el valor directamente en la memoria.

//Convertimos de JS a JSON
const convertir = JSON.stringify(persona, null, 2);

//Guardamos los cambios en el objeto JSON utilizando el fs.write
fs.writeFileSync('data.json', convertir) //Sobrescribe el archivo con el nuevo contenido.

console.log('✅ Archivo actualizado con éxito.');








