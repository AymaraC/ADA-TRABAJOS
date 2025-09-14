/*Crea un script en Node.js que permita al usuario ingresar una lista de
números separados por comas. Ordena los números de menor a mayor y
muestra la lista ordenada.*/

const readlineSync = require('readline-sync');

const numeros = readlineSync.question('Ingrese los números separados por coma: ');

const ordenarNumeros = numeros.split(',').map(num => parseInt(num.trim()));

const ordenados = ordenarNumeros.sort((n1, n2) => n1 - n2)

console.log('Números ordenados: ', ordenados);

