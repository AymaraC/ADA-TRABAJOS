/*Ejercicio 5: Función con parámetros rest
Consigna: Crea una función llamada sumarTodos que acepte una cantidad indefinida de números y devuelva su suma. 
Luego, llama a la función con varios números y muestra el resultado en la consola.*/

function sumarTodos(...numeros: number[]){
    return numeros.reduce((a, b) => a + b, 0);
};

console.log(`La suma de todos los números es:`,sumarTodos(10, 15, 10, 30, 1, 1, 6));














