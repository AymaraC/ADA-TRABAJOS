/*Crea una función expresada llamada concatenarNombres que reciba dos 
nombres (nombre y apellido) como parámetros y devuelva el nombre 
completo concatenado.*/

const promptSync = require ("prompt-sync")();

let usuario = promptSync("Ingrese su nombre: ");
let usuarioApellido = promptSync("Ingrese su apellido: ");

let concatenarNombres = function (nombre, apellido){
    return "¡Hola " + nombre + " "+ apellido + "!"

}
console.log (concatenarNombres(usuario,usuarioApellido));


