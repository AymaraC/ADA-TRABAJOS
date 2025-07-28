/*Crea una función que reciba una cadena de texto y devuelva cuántas vocales contiene.
Consigna:
• Usa un bucle for y condicionales.
• Considera vocales mayúsculas y minúsculas (a, e, i, o, u).*/

let oracion = "¡Bienvenidas al Módulo II!"

function contarVocales (){
    let contar= 0;

    for (let i = 0; i < oracion.length; i++){
        let letra = oracion[i].toLowerCase()

        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {

         contar ++

        }
    }
     
    return contar
}

console.log (`En la oración ¡Bienvenidas al Módulo II! hay ${contarVocales()} vocales.`)


