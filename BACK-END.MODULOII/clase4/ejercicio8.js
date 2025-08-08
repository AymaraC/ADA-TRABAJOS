/*Consigna:
¿Sabes cuántas metas has establecido? Escribe un programa que lea tu archivo metas.json y cuente cuántas metas tienes 
actualmente. 
Pista: Usa length para obtener la cantidad de elementos en la lista.*/

const fs = require('fs');

fs.readFile('metas.json', 'utf-8', (err,data) => {   //data es el contenido dentro del archivo
    if (err){
        console.log("El archivo no se puede leer.", err)
        return;
      
}

let metas = JSON.parse(data)
let cantidadMetas = metas.length

console.log(`La cantidad de metas actuales son: ${cantidadMetas}`)

})
















