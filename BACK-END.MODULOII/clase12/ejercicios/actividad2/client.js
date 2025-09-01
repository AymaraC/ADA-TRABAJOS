const path = require('path');
const net = require('net');
const readlineSync = require('readline-sync');

const PORT = 8081;

const client = net.createConnection(PORT);
client.on('connect', () => {
    console.log('Conexión exitosa. Conectado al servidor ✅')   
});

const ruta = readlineSync.question('¡Bienvenido! Ingrese la ruta que quiere normalizar: ');
client.write(ruta);

client.on('data', (data) => {
    console.log('Respuesta del servidor: ',data.toString());    //El servidor nos devuelve la ruta normalizada.
    client.end()
});

client.on('error', (err) => {       //Manejamos los errores.
    console.error('ERROR: ', err.message)
});

/*Rutas de prueba:
e.g.,./docs/../file.txt 
respuesta: e.g.,.\file.txt

/home/user//docs/./file.txt  
respuesta: \home\user\docs\file.txt

home/user/docs/../images/file.jpg  
respuesta: \home\user\images\file.jpg

/home/user/docs/../../file.txt 
respuesta: \home\file.txt */
















