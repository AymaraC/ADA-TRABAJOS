/* Paso 1: Importamos las versiones de uuid que vamos a usar
Actualmente la biblioteca UUID no tiene soporte con CommonJS, por lo que hacer la importacion de esta forma no es posible:
const { v1: uuidv1, v3: uuidv3, v4: uuidv4, v5: uuidv5 } = require('uuid');
Por defecto, nuestros archivos estan configurados en CJS, para cambiarlo debemos dirigirnos a nuestro archivo package.json,
y en el mismo poner "type": "module" -> esto indicará que a partir de ahí trabajaremos con ESM
Una vez que está configurado de esta forma, todas las importaciones que hagamos deberan ser con este formato:*/

//Importamos las diferentes versiones a utilizar
import {v1 as uuid1, v3 as uuid3, v4 as uuid4, v5 as uuid5} from 'uuid';

// UUID v1 - Basado en tiempo. Se genera basado en la marca del tiempo actual y la dirección MAC
const idV1 = uuid1(); //No lleva ningún parámetro
console.log(`\nUUID v1 basado en tiempo: ${idV1} \n`);

// UUID v3 - Basado en nombre y espacio de nombres. Este si lleva parametros porque va a necesitar el nombre y el espacio de nombres.
const NAMESPACE = uuid3.URL; //Este es un espacio de nombre estandar que está basado en URL
const nameV3 = 'Aymara';
const idV3 = uuid3(nameV3, NAMESPACE);
console.log(`UUID v3 basado en nombre y espacio de nombre con MD5: ${idV3} \n`);

// UUID v4 - Aleatorio
const idv4 = uuid4(); //No necesita parametros porque genera numeros aleatorios
console.log(`UUID v4 aleatorio: ${idv4} \n`);

// UUID v5 - Basado en nombre y esoacio de nombre (SHA-1)
const NAMESPACEv5 = uuid5.URL;
const nameV5 = "Aymara";
const idv5 = uuid5(nameV5,NAMESPACEv5)
console.log(`UUID v5 basado en nombre y espacio de nombre con SHA-1: ${idv5} \n`);





