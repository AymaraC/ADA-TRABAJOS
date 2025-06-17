/*Nuestra tarea es contar la cantidad de números impares que hay desde el número 0 hasta un número X (inclusive).*/ 

const promptsync = require ("prompt-sync")(); 

let usuario = parseInt (promptsync ("Ingrese un número positivo: "));
let sumaImpares = 0; //En esta variable se guarda cuántos impares hay//

    for (let i = 0; i <= usuario; i ++ ) { //Recorre los números del 0 hasta el número que ingrese el usuario//
        
        if (i % 2 !== 0) //Si el número actual es impar//
            sumaImpares ++;   //Como se incrementa el número impar//
     }
        console.log ("La cantidad de números impares desde el 0 hasta el " + usuario + " es: " + sumaImpares);


