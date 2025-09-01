//EJEMPLO path.Extname.js
const path = require('path');

//EJEMPLO 1: Obtenemos la extensión de un archivo desde una ruta absoluta
const filePath = '/home/user/docs/file.txt';
const extname1 = path.extname(filePath);
console.log('Ejemplo 1 - Extensión del archivo: ',extname1); //Solo devuelve la extensión del archivo.

//EJEMPLO 2: Obtener extensión de una ruta relativa
const relativePath = 'scr/utils/helpers.js';
const extname2 = path.extname(relativePath);
console.log('Ejemplo 2 - Extensión del archivo helpers: ',extname2);

//EJEMPLO 3: Manejo de archivo sin extensión
const noExtPath = '/home/user/docs/README';
const extname3 = path.extname(noExtPath);
console.log('Ejemplo 3 - Extensión del archivo sin extensión: ',extname3);

//EJEMPLO 4: Rutas con múltiples puntos en nombre del archivo
const multiplesDot = 'images/photo.large.jpg.large';
const extname4 = path.extname(multiplesDot);
console.log('Ejemplo 4 - Extensión del archivo: ',extname4); //Imprime el último que haya.
