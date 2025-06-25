/*Solicita al usuario ingresar la marca de un auto y utiliza una función flecha 
para verificar y mostrar si el auto es de origen nacional o importado. 
Considera que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de 
origen nacional. 
✔ Solicita al usuario que ingrese la marca de un auto. 
✔ Utiliza una función flecha para determinar si la marca ingresada 
corresponde a un auto de origen nacional o importado. 
✔ Muestra un mensaje indicando si el auto es de origen nacional o 
importado, basado en la marca ingresada por el usuario.*/

const promptSync = require ("prompt-sync")();

let marca = promptSync("Ingrese la marca del auto que quiere verificar: ").toLowerCase();

let esNacional = (marca) => {
    if (marca === "ford" || marca === "chevrolet" || marca === "fiat"){
        return "El auto es de origen nacional."
    } else {
        return "El auto es importado."
    }
}
console.log (esNacional(marca))

