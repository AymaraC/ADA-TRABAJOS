/*Crea un script en Node.js que permita al usuario ingresar un texto, luego
lo cifre usando el algoritmo AES-256-CBC y lo descifre para mostrar el
resultado original. Usa el módulo crypto para el cifrado y descifrado.*/
const crypto = require('crypto');
const readlineSync = require('readline-sync');

const texto = readlineSync.question('Ingrese una oracion: ');

const algoritmo = 'AES-256-CBC';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

let cipher = crypto.createCipheriv(algoritmo,key,iv);
let cifrado = cipher.update(texto, 'utf-8', 'hex');
cifrado += cipher.final('hex')

console.log(`Mensaje cifrado: ${cifrado}`);

//Hasta acá fue el cifrado
//De aca en mas es el decifrado
const descifrado = crypto.createDecipheriv(algoritmo,key,iv);
let decipher = descifrado.update(cifrado, 'hex','utf-8');
decipher += descifrado.final('utf-8');

console.log('Texto descrifado: ', decipher);

