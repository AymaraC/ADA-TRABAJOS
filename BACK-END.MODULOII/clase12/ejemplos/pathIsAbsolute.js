//EJEMPLO pathisAbsolute.js
const path = require('path');

//EJEMPLO 1: Verificación de ruta absoluta en sist. UNIX
const absolutePath = '/home/user/docs/file.txt';
const isAbsolute = path.isAbsolute(absolutePath)
console.log('Ejemplo 1 - ¿Es ruta absoluta?: ',isAbsolute);
console.log(absolutePath);

//Resultado esperado: true

//EJEMPLO 2: Verificación de ruta absoluta en sist.Windows
const absolutePath2 = 'C:\\Users\\Admin\\Document\\file.txt';
const isAbsolute2 = path.isAbsolute(absolutePath2);
console.log('Ejemplo 2 - ¿Es ruta absoluta?: ',isAbsolute2);
console.log(absolutePath2);

//EJEMPLO 3: Verificación de ruta relativa
const relativePath = 'docs/file.txt';
const isAbsolute3 = path.isAbsolute(relativePath)
console.log('Ejemplo 2 - ¿Es ruta absoluta?: ',isAbsolute3);
console.log(isAbsolute3);