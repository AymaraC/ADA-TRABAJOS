/*Crea un script en Node.js que utilice el módulo readline-sync para solicitar al usuario que ingrese su nombre y edad. 
Luego, muestra un mensaje de saludo personalizado que incluya el nombre y la edad del usuario.*/

const readlineSync = require('readline-sync');

const nombre = readlineSync.question('Por favor, ingrese su nombre: ');

const edad = readlineSync.questionInt('Ahora ingrese su edad: ');

console.log(`¡Bienvenido a nuestro programa ${nombre}! Tu edad es: ${edad} años.`);
