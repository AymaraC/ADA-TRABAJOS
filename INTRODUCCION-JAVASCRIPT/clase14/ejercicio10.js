/*Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. 
Realiza las siguientes acciones: 
1. Inicializa un array vacío para almacenar las flores favoritas. 
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y 
agrega cada una al array manualmente (sin usar métodos como push). 
3. Pregunta al usuario por una flor específica y verifica si está entre sus favoritas. 
4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto 
debe hacerse manualmente).*/

const promptSync = require ("prompt-sync")();

let floresFavoritas = [];

let primerFlor = promptSync("Ingrese su la flor que más le guste: ").toLowerCase();
floresFavoritas[floresFavoritas.length] =primerFlor
let segundaFlor = promptSync("Ingrese su segunda flor favorita: ").toLowerCase();
floresFavoritas[floresFavoritas.length] =segundaFlor
let tercerFlor = promptSync("Ingrese su tercer flor favorita: ").toLowerCase();
floresFavoritas[floresFavoritas.length] =tercerFlor

let cuartaFlor = promptSync("Y te pido una flor más: ").toLowerCase();

let coincidencias = 0;

for (let i= 0; i < floresFavoritas.length; i++){
    if (floresFavoritas[i] === cuartaFlor){
       coincidencias ++;    //Acá le estamos diciendo sumale 1 a la variable coincidencias
    }


}if (coincidencias > 0) {
  console.log("¡Esa flor ya estaba entre tus favoritas! 🌸 Apareció " + coincidencias + " vez/veces.");
} else {
  console.log("Esa es una flor no mencionada antes 🌼");
}



