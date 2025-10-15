/*Ejercicio 4: Parámetros opcionales simulados
Declara dos variables, una para almacenar un nombre y otra para almacenar una edad. 
Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no proporcionada". 
Si se asigna la edad, imprímela junto al nombre.*/

let nombre : string = 'María';
let edad : number | null = null;

let mensaje = `Mi nombre es ${nombre}.
Edad: ${edad !== null ? `Tengo ${edad} años.` : 'Edad no proporcionada.'}`

console.log(mensaje);



















