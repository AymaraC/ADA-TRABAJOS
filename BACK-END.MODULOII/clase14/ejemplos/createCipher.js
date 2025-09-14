//Importamos el módulo Crypto
const crypto = require('crypto');

//Algortimo de cifrado AES con un tamaño de 256 bits
const algoritmo = 'aes-256-cbc';
//Generamos una clave de 256 bits -> 32 bytes
const  key = crypto.randomBytes(32); // se le pasa el tamaño entre ()
//Generamos un vector de inicialización de 16 bytes
const iv = crypto.randomBytes(16);

//Creamos el objeto 'cipher' 
const cipher = crypto.createCipheriv(algoritmo, key, iv);

//Datos a autenticar
const data = 'Mensaje secreto';

//Ciframos los datos 
let encriptado = cipher.update(data, 'utf-8', 'hex') //Tiene que entrar con el utf8 y salir con el hex
//Finalizar cifrado
encriptado += cipher.final('hex') //Con el += agrega lo que falte
console.log('Texto cifrado: ', encriptado);

//Si yo quiero decifrar el mensaje
//Creamos un objeto de cipher
const decipher = crypto.createDecipheriv(algoritmo, key, iv) //Los mismos pasos pero al revés

//Deciframos los datos
let decifrado = decipher.update(encriptado, 'hex', 'utf-8');
decifrado += decipher.final('utf-8');
console.log('Texto decifrado: ', decifrado);
