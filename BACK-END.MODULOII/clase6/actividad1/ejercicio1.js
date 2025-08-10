/*1. Una variable de entorno llamada GREETING que define el tipo de saludo (por ejemplo, "Hola", "Bienvenido" o 
"¡Buenos días!").
2. El nombre del usuario, que se obtendrá como argumento desde la línea de comandos.*/

require('dotenv').config() //Archivos donde se almacenan las variables de entorno

const saludo = process.env.GREETING || 'Hola, ¡Bienvenido!' //Acá se indica que si por alguna razón no está el greeting 
//que por default se use esto otro. 

const nombre = process.argv[2] || 'Invitado'//El process es un array en donde en la posición 2 se va a encontrar 
//el argumento que le pasamos por la consola.

console.log(`${saludo} ¡${nombre}!`);





