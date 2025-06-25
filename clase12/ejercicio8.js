/*Para este ejercicio vamos a generar dos funciones: 
a) Una va a sumar los valores en la diagonal marcada en rojo. 
b) La otra va a marcar los valores de la diagonal marcada en verde. 
Ambas funciones deben devolver un resultado único. Rojo: 505 Verde 505*/

let matriz = [
[1,2,3,4,5,6,7,8,9,10],
[11,12,13,14,15,16,17,18,19,20],
[21,22,23,24,25,26,27,28,29,30],
[31,32,33,34,35,36,37,38,39,40],
[41,42,43,44,45,46,47,48,49,50],
[51,52,53,54,55,56,57,58,59,60],
[61,62,63,64,65,66,67,68,69,70],
[71,72,73,74,75,76,77,78,79,80],
[81,82,83,84,85,86,87,88,89,90],
[91,92,93,94,95,96,97,98,99,100],
];

function sumarDiagonalRoja (matriz){
    let suma = 0;                       //Acumula nos números de la diagonal roja
    let miArray = [];                   //Guarda los números que encuentra en la diagonal roja
    for (let i=0; i < matriz.length; i ++){    //Es el bucle que va a recorrer todas las filas de la matriz
        let valor = matriz[i][i]               //Toma el valor de la diagonal y como son iguales el numero de fila con el de columan es i, i
        suma += valor;                         //A la variable suma le sumamos el valor(numero de la diagonal) 
        miArray.push(valor);                   //VA agregando el valor (número) que va encontrando en el array
    }
    console.log("Valores de la diagonal roja:", miArray);  //Esto muestra los números de la diagonal por consola
    return suma;
    }

 function sumarDiagonalVerde(matriz) {
    let suma = 0;
    let miArray = [];
    let n = matriz.length;

    for (let i = 0; i < n; i++) {
        let valor = matriz[i][n - 1 - i];
        suma += valor;
        miArray.push(valor);
    }

    console.log("Valores de la diagonal verde:", miArray);
    return suma;
}

console.log("Suma diagonal roja:", sumarDiagonalRoja(matriz));
console.log("Suma diagonal verde:", sumarDiagonalVerde(matriz));










