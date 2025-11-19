/*Ejercicio 7: Uso de tuplas en una función genérica (Ejercicio Entrevista)
Crea una función genérica que acepte una tupla con dos elementos de cualquier tipo y retorne una nueva tupla con los 
elementos invertidos. Para este ejercicio deben pensar mucho porque es para poner en juego la lógica de programacion.*/

//Los <> declaran tipos genericos, como parametro le pasamos la tupla con los valores en el orden correcto y en el retorno las posiciones 
//invertidas para que así sea reutilizable la función.

function mostrarTuplaInvertida<A, B>(tupla: [A, B]) : [B, A]{   
    return [tupla[1], tupla[0]];
}

console.log(mostrarTuplaInvertida(['Aymara', 27]));
console.log(mostrarTuplaInvertida([true, 27]));
console.log(mostrarTuplaInvertida(['¡Hola', 'mundo!']));