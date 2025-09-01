//Importamos el modulo 'path'
const path = require('path');

//Ejemplo 1: Uniendo segmentos de ruta simples
//Como el primer segmento es una ruta absoluta(indicamos que es una ruta absoluta porque tiene la barrita por delante /user)
//el resultado también será absoluta 
const ejemplo = path.join('/user', 'local', 'bin');
console.log('Ejemplo 1 - Ruta combinada: ',ejemplo);
//Resultado esperado:
// En sistema Windows: \user\local\bin

//Ejemplo 2: Eliminando elementos redundantes
//Se pasan varios segmentos que incluyen barras extras al principio y al final.
//path.join los une en una única ruta, eliminando cualquier elemento redundante.
const ejemplo2 = path.join('/user////', '\local', '/bin/')
console.log('\nEjemplo 2 - Ruta normalizada sin redundancias: ',ejemplo2);
//Resultado esperado: Ejemplo 2 - Ruta normalizada sin redundancias:  \user\local\bin\

//Ejemplo 3: Normalizar rutas con '..'(subir directorio)
// '/user' + 'local' sube un nivel con '..' y llega a 'bin', el resultado en la ruta sería '/user/bin'
const ejemplo3 = path.join('/user', 'local', '..', 'bin')
console.log('\nEjemplo 3 - Ruta normalizadada con "..": ',ejemplo3);

//Ejemplo 4: Construir una ruta relativa multiplataforma.
//Crea una ruta relativa que funcione en cualquier sistema operativo.
//Resultado en UNIX: docs/projects/index.html
const ejemplo4 = path.join('docs', 'projects', 'index.thml');
console.log('\nEjemplo 4 - Ruta relativa: ',ejemplo4);
