/*Solicita al usuario cinco calificaciones y usa una función flecha para calcular 
el promedio.*/

const promptSync = require("prompt-sync")();

let notas = [];

    for (i = 0; i < 5; i ++){
        let usuario = parseFloat (promptSync("Ingrese las notas: "));
        notas.push(usuario)
    }

let calcularPromedio = (notas) => {
    let suma = 0;
    for (i =0; i < notas.length; i ++){
        suma += notas [i]  //+= quiere decir que la variable va a ser igual a la variable mas lo que siga.
    }
    return suma / notas.length;   // se divide por la cantidad de notas que hay
}

let promedio = calcularPromedio (notas);

console.log (notas)
console.log (promedio)






