//Ejemplo PathBasename.js se orienta al final de la ruta
const { log } = require('console');
const path = require('path');

//EJEMPLO 1: Obtenemos el nombre del archivo desde una ruta absoluta
//'fullPath' contiene una ruta absoluta a un archivo llamado file.txt
const fullPath = '/home/user/docs/file.txt';
//'path.basename()' toma la ruta absoluta y devuelve solo la ruta del archivo
const baseName = path.basename(fullPath); //Se le pasa la constante que tiene la ruta absoluta
console.log('Ejemplo 1 - Nombre del archivo: ',baseName);
//Resultado esperado: 'file.txt' nosotras sabemos que nos iba a devolver esto pero sirve por si el usuario nos pasa una ruta o parte de una.

//EJEMPLO 2: Obtenes el nombre del archivo sin la extensión.
const basenameSinExt = path.basename(fullPath, '.txt');
console.log('\n Ejemplo 2 - Nombre del archivo sin extensión: ', basenameSinExt);
//Resultado esperado: 'file'

//EJEMPLO 3: Uso con rutas relativas
const relativePath = 'src/utils/helpers.js';
const basename2 = path.basename(relativePath)
console.log('\n Ejemplo 3 - Nombre del archivo con ruta relativa: ',basename2);
//Resultado esperado: 'helpers.js', busca el nombre del archivo

//EJEMPLO 4: Obtener el nombre del directorio
//'dirPath' es una ruta que termina en un directorio llamado html.
const dirPath = '/var/www/html';
const baseName3 = path.basename(dirPath)
console.log('\n Ejemplo 4 - Nombre del directorio: ',baseName3);
//Resultado esperado: 'html'

//EJEMPLO 5: Ruta con separadores de Windows
//'windowsPath' es una ruta que va a utilizar separadores de
//directorios de Windows para un archivo llamado 'report.pdf'
const windowsPath = 'C:\\Users\\Admin\\Documents\\report.pdf'
const basename4 = path.basename(windowsPath)
console.log('\nEjemplo 5 - Nombre del archivo en ruta Windows: ',basename4);
