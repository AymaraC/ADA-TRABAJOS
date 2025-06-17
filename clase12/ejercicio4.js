/*Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla.*/

const promptsync = require ("prompt-sync")();

let notas = []

for (let alumno = 0; alumno <= 3; alumno ++){

    let profesora = promptsync("Ingrese las notas: ");
    notas [alumno] = profesora
}

    console.log (notas);

