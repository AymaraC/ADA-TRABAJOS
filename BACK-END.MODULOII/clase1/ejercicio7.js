/*Ejercicio 7: Filtrar palabras largas
Escribe una función que reciba un array de palabras y un número, y devuelva las palabras que tienen más caracteres 
que el número dado.
Consigna:
• Usa el método filter().
• Usa una función flecha para simplificar el código.*/

palabras = ["Hola", "mundo", "vamos", "a", "estudiar", "JavaScript"]
numero = 7

let palabrasLargas = (palabras, numero) => {
    
let resultado = palabras.filter(palabras => palabras.length > numero) //La longitud de la palabra tiene que ser mayor al número dado.

return resultado;

}

console.log (palabrasLargas(palabras, numero))


















