/*Ejercicio 1: ¿Quién puede entrar al parque? Tienes un parque de diversiones que permite la entrada a personas mayores 
de 12 años y menores de 60. Escribe una función que reciba una lista de edades y devuelva cuántas personas pueden entrar 
al parque. 
Consigna: 
• Usa un bucle for y condicionales. 
• Usa un array como entrada de la función. 
• Devuelve el número de personas que cumplen con los requisitos.*/

let edadades = [18, 25, 10 , 75, 42, 60, 7, 57, 15];

function listaDeEdades (edades){

    let contar = 0;

    for (let i = 0; i < edades.length; i++){

         let edadActual = edades[i]

    if (edadActual >= 12 && edadActual <= 60){
        
        contar ++
        }

    }
        return contar;
}

console.log (`La cantidad de personas que pueden entrar al parque son: ${listaDeEdades(edadades)}`)