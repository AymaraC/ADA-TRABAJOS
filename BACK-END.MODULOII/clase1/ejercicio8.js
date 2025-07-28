/*Ejercicio 8: Contador de letras
Crea una función que reciba una cadena de texto y una letra, y devuelva cuántas veces aparece esa letra en la cadena.
Consigna:
• Usa un bucle for y condicionales.
• Haz que la búsqueda no distinga entre mayúsculas y minúsculas.*/

let frase = "Que divertido aprender JavaScript"

let contarLetra = (frase, letra) => {

    let contar = 0;            //adentro de la función para que empiece en 0 cada vez

    for (let i = 0; i < frase.length; i++){
        if (frase[i].toLowerCase() === letra.toLowerCase()) {  
            contar ++                                               //si cumple con el if le suma uno mas al contador
        }
    
    }
    return contar;

}

console.log (contarLetra(frase, "e"))


























