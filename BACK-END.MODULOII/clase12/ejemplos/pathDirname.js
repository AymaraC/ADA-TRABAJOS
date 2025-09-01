//EJEMPLO PathDirname.js
//Importamos modulo
const path = require('path');

//EJEMPLO 1: Obtener directorio contenedor de un archivo desde ruta absoluta
const filePath = '/home/user/docs/file.txt';
const dirName1 = path.dirname(filePath);
console.log('Ejemplo 1 - Directorio contenedor de "file.txt"',dirName1);
//Devuelve la ruta del directorio completo

//EJEMPLO 2: Obtener el directorio de un archivo usando una ruta relativa
const relativePath = 'src/utils/helpers.js'
const dirname2 = path.dirname(relativePath);
console.log('Ejemplo 2 - Directorio contenedor de "helpers.js: " ',dirname2);

//EJEMPLO 3: Uso con rutas de Windows
const windowsPath = 'C:\\Users\\Admin\\Documents\\report.pdf'
const dirname3 = path.dirname(windowsPath);
console.log('Ejemplo 3 - Directorio contenedor en una ruta Windows: ',dirname3);

// EJEMPLO 4: Obtener el directorio padre de un directorio.
const dirOnyPath = '/var/www/html'
const parentDirname = path.dirname(dirOnyPath)
console.log('Ejemplo 4 - Directorio padre: ',parentDirname);

//EJEMPLO 5: Manejo de ruta que terminan en barra diagonal
const slashPath = '/home/user/docs/';
const parentDirname2 = path.dirname(slashPath);
console.log('Ejemplo 5 - Directorio padre de /home/user/docs/: ',parentDirname2);