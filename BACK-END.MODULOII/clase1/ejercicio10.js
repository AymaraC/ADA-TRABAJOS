/*Ejercicio 10: Invertir palabras
Crea una función que reciba una cadena de texto y devuelva otra cadena con las palabras en orden inverso.
Consigna:
• Usa el método split() para separar las palabras.
• Usa el método reverse() para invertir el array.
• Usa el método join() para unir las palabras en una nueva cadena.*/

let palabrasInvertidas = (frase) => {

    let separarFrase = frase.split (" ");
    let revertirFrase = separarFrase.reverse();
    let resultado = revertirFrase.join(" ")

return resultado;

}

let frase = "Hoy hay mucho viento y hace frío"


console.log (palabrasInvertidas(frase));












