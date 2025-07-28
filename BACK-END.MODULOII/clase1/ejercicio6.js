/*Ejercicio 6: Calculadora de promedio
Escribe una función que reciba un array de números y devuelva el promedio.
Consigna:
• Usa un bucle for para sumar los números.
• Divide la suma total entre la cantidad de elementos del array.*/

let numeros = [10, 8, 5, 7, 6, 4, 10]

function calcularPromedio(numeros){

    let suma = 0;
    
    for (let i = 0; i < numeros.length; i++){
        suma += numeros[i];     //sumo cada número al total
    }
    let promedio = suma / numeros.length //se saca el promedio porque se divide la suma de los numeros por la cantidad de numeros

    return promedio
}

console.log (`El promedio fue de ${calcularPromedio(numeros).toFixed(2)}`)










