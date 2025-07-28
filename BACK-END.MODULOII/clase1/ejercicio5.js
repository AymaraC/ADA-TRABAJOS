/*Ejercicio 5: Generador de iniciales 🅰️
Escribe una función que reciba un nombre completo y devuelva las iniciales en mayúsculas.
Consigna:
• Usa el método split() para dividir el nombre.
• Usa un bucle for y métodos de string.*/

let nombre = "Aymara Belen Cabanal"

function generarIniciales (nombre){

        let palabras = nombre.split(" ") // Divide el nombre por cada espacio y lo guarda en un array (["Aymara", "Belen", "Cabanal"])
        let iniciales = "";              // Variable para ir acumulando las iniciales, string


    for (let i = 0; i < palabras.length; i++){
        iniciales += palabras[i][0].toUpperCase();  // Toma la primera letra de cada palabra, la convierte a mayúscula y la suma a la variable "iniciales"

    }

return iniciales;

}

console.log (`Las iniciales del nombre ingresado son: ${generarIniciales(nombre)}`)


