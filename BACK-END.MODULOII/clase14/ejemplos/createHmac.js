//Importamos modulo 'crypto'
const crypto = require('crypto');

//Guardamos en una constante los datos que queremos autenticar
const data = 'Mensaje secreto';

//Almacenamos en una constante una clase secreta para HMAC
const secretKey = 'mi_clave_secreta';

//Creacion del objeto HMAC usando un algoritmo 256
const hmac = crypto.createHmac('sha256', secretKey);

//Actualizar el HMAC con los datos, llamamos al objeto hmac
hmac.update(data);

//Obtener el HMAC en formato hexadecimal
const hmacOuput = hmac.digest('hex');

//Mostrar el HMAC generado
console.log('HMAC EN SHA-256: ', hmacOuput);
