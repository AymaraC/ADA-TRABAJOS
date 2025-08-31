/*Ejercicio 4: Validación de Contraseña
Crea un script que solicite al usuario una contraseña y la valide. Si la contraseña es "secreto123", muestra un mensaje
de acceso concedido. De lo contrario, muestra un mensaje de acceso denegado.*/

const readlineSync = require('readline-sync');

const contraseña = readlineSync.question('Ingrese la contraseña: ',{hideEchoBack:true}); //Oculta la contraseña mientras la escribimos por consola.

if(contraseña === 'secreto123'){
    console.log('Acceso concedido.');
    
} else {
    console.log('Acceso denegado.');
    
};





















