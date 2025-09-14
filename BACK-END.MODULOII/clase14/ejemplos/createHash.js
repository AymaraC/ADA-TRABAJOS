//Importar módulo 'crypto'
const crypto = require('crypto')

//Guardamos en una constante los datos que queremos hashear
const data = 'Este es un mensaje secreto';

//Creamos un objeto Hash usando el algoritmo 'sha256'
const hash = crypto.createHash('sha256')

//Llamamos al objeto 'hash' y actualizamos el mismo con los datos.
hash.update(data)

//Obtenemos el hash en formato hexadecimal, de buffer a hexadecimal???
const hashOutput = hash.digest('hex');

//Mostramos el hash generado
console.log('Hash SHA-256: ',hashOutput);

