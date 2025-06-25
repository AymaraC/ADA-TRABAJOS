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
floresFavoritas = [floresFavoritas.length]
let segundaFlor = promptSync("Ingrese su segunda flor favorita: ").toLowerCase();
floresFavoritas = [floresFavoritas.length]
let tercerFlor = promptSync("Ingrese su tercer flor favorita: ").toLowerCase();
floresFavoritas = [floresFavoritas.length]

let cuartaFlor = promptSync("Y te pido una flor más: ").toLowerCase();

for (let i= 0; i < floresFavoritas.length; i++){
    if (primerFlor === cuartaFlor){
        console.log ("¡Es la misma que la flor que más te gusta!🎉")
    
    }else if (segundaFlor === cuartaFlor){
        console.log ("¡Coincide con tu segunda flor favorita!💮")
    }else if (tercerFlor === cuartaFlor){
        console.log ("¡Coincidió con la tercera!💐")
    }else{
        console.log ("Esa es una flor no mencionada antes🌼")
    }
}



