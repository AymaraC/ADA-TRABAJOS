/*Dada una matriz, recorrer sus valores y sumar solo los números que estén por 
encima o sean iguales a 10, pero menores que 1000.*/
let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4],
];

let suma = 0;                                 //En donde se van a sumar los valores

for (let i = 0; i < matriz.length; i ++){    //Recorre las filas de la matriz

    for (let j = 0; j < matriz[i].length; j++){     //Recorre los valores de la fila, o sea las columnas.
        let valor = matriz[i][j];                  //Guarda en una variable el número actual de la matriz en la posición i y j.
        if ( valor >= 10 && valor < 1000) {  //Acá le decimos que el valor debe ser menor o igual a 10 y menor a 1000. Ambas condiciones deben cumplirse con el AND.   
            suma += valor;
            }
        }
    }
console.log ("La suma de los números es " + suma);





