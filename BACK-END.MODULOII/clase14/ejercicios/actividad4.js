/*Crea un script en Node.js que permita al usuario ingresar una contraseña
y un "sal" (un valor aleatorio que se usa para añadir seguridad). Luego,
genera un hash de la contraseña combinada con el "sal" usando el
algoritmo SHA-256. Muestra el hash generado.*/ 

const crypto = require('crypto');
const readlineSync = require('readline-sync');
const password = readlineSync.question('Por favor ingrese la contraseña: ');

const sal = readlineSync.question('Ingrese un valor de sal: ');

const hash = crypto.createHash('SHA-256').update(password + sal).digest('hex');

console.log('HASH + SAL: ',hash);
