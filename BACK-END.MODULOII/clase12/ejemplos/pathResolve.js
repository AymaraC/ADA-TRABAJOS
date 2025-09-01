//EJEMPLO pathResolve.js
const path = require('path');

//EJEMPLO 1: Resolución de una ruta relativa desde el directorio actual.
const resolvePath = path.resolve('file.txt');
console.log('Ejemplo 1 - Ruta resuelta en directorio actual: ',resolvePath);

//EJEMPLO 2: Multiples segmentos de ruta
const resolvePath2 = path.resolve('/home/user', 'docs', 'file.txt');
console.log('Ejemplo 2 - Ruta resulta con multiples segmentos: ',resolvePath2);

//EJEMPLO 3: Uso con rutas relativas que cambian de nivel
const resolvePath3 = path.resolve('/home/user/docs/', '../images', 'file.jpg')
console.log('Ejemplo 3: - Ruta resuelta con navegación hacia arriba: ',resolvePath3);

//EJEMPLO 4: Ruta con directorio vacío
const resolvePath4 = path.resolve('/home/user', '', 'file.txt');
console.log('Ejemplo 4 - Ruta resulta con directorio vacío: ',resolvePath4);

//EJEMPLO 5: Resolución de rutas desde un directorio relativo.
const resolvePath5 = path.resolve('docs', 'file.txt');
console.log('Ejemplo 5 - Ruta resulta desde un directorio relativo: ',resolvePath5);