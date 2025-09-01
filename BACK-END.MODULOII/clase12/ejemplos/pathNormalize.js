//EJEMPLO pathNormalize.js
const path = require('path')

//EJEMPLO 1: Normalizacion de una ruta con barras redundantes
const rawPath = '/home/user//docs/./file.txt';
const normalizePath = path.normalize(rawPath);
console.log('Ejemplo 1 - Ruta normalizada: ',normalizePath);

//EJEMPLO 2: Normalización de una ruta con navegación hacia arriba.
const rawPath2 = '/home/user/docs/../images/file.jpg';
const normalizePath2 = path.normalize(rawPath2)
console.log('Ejemplo 2 - Ruta normalizada con navegación hacia arriba: ');
console.log(normalizePath2);

// Ejemplo 3: Normalizacion de una ruta con multiples puntos de navegacion
const rawPath3 = '/home/user/docs/../../file.txt'
const normilazePath3 = path.normalize(rawPath3)
console.log('Ejemplo 3 - Ruta normalizada con multiples puntos:');
console.log(normilazePath3);