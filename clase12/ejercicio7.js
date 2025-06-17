/*Declara una variable que contenga una matriz de 5x5 llena de puros números 
enteros y positivos. Luego, escribe un algoritmo para sumar todos los números en 
la matriz.*/

let suma = 0;
let matriz = [
    [33, 2, 5, 6, 7],
    [2, 10, 5, 4, 3],
    [1, 45, 8, 10, 5],
    [3, 8, 5, 7, 2, ],
    [3, 51, 6, 9, 7],
];
    for (let i=0; i < matriz.length; i ++){

        for (let j = 0; j < matriz[i].length; j++){
            suma += matriz [i][j];

        }
    }
        console.log ("La suma de todos los números es " + suma);



