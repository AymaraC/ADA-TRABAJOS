/*Ejercicio 3: Ordenando números
Crea una función que reciba un array de números y devuelva un nuevo
array con los números ordenados de menor a mayor.
Consigna:
• Usa el método sort().*/

let numeros = [10, 5, 78, 21, 63, 82, 33, 90, 55, 47, 1056, 850];

function numerosOrdenados (){

    let copiaDeNumeros = [...numeros]; //spread operator, para hacer una copia del array y no modificiar el original

    copiaDeNumeros.sort((a, b) => a - b); //se utiliza a - b para dar el orden de menor a mayor

    return copiaDeNumeros;
}

console.log (numerosOrdenados())



