/*Ejercicio 9: Números únicos
Escribe una función que reciba un array de números y devuelva un nuevo
array sin números repetidos.
Consigna:
• Usa el objeto Set para eliminar duplicados.
• Convierte el Set a un array usando el operador spread (...).*/

let numeros = [25, 28, 28, 6, 5, 27, 6, 9, 25, 1, 8, 8, 6, 16];

let numerosUnicos = (numeros) => {

    let arraySinRepetidos = [...new Set(numeros)];

    let resultado = arraySinRepetidos

    return resultado;
}

console.log (numerosUnicos(numeros))


















