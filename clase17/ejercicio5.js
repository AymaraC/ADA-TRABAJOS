/*Ejercicio 5: Manipulación de Arrays y Cadenas
A partir del siguiente array de frases, escribe la función “procesarFrases”
que realice las siguientes tareas:
1. Convierta cada frase a minúsculas. Investigar el método
“.toLowerCase()” para este punto.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
/Global_Objects/String/toLowerCase
2. Divida cada frase en palabras.
3. Reemplace las palabras "malo" por "bueno".
4. Combine las palabras de cada frase en una nueva cadena separada
por espacios.
5. Devuelva un nuevo array con las frases modificadas.*/

let frases = [
    "El clima es MALO hoy",
    "Este libro es muy MALO",
    "El servicio aquí es MALO"
]

function procesarFrases(frases){
    frases = frases.map(a => a.toLowerCase())
    

    frasesComa = frases.map(a => a.split(" "))
    

    frasesMalo = frases.map(a => a.replace("malo","bueno"))
    
    
    let frasesJuntas = frases.join(" ");
    

    return frasesNuevas = [
        frases,
        frasesComa,
        frasesMalo,
        frasesJuntas
    ]
}

console.log(procesarFrases(frases))