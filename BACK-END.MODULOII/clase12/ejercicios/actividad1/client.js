const net = require('net');
const readlineSync = require('readline-sync');

const PORT = 8080;


const client = net.createConnection(PORT);
client.on('connect', () => {
    console.log('Conexión exitosa. Conectado al servidor ✅')   
});

const ruta = readlineSync.question('¡Bienvenido! Ingrese la ruta: ');
client.write(ruta); //Pasamos solo el nombre de la variable para que me de un resultado real de true or false.
   

client.on('data', (data) => {
    console.log('Respuesta del servidor: ',data.toString());       //El servidor nos responde si la ruta es absoluta o relativa.
    client.end()
});

client.on('error', (err) => {       //Manejamos los errores.
    console.error('ERROR: ', err.message)
});

/*Rutas probadas:
C:\Users\Admin\Documents\file.txt 
respuesta: La ruta es absoluta.

.\docs\file.txt
respuesta: La ruta es relativa.

D:\Projects\MyApp\index.js
respuesta:  La ruta es absoluta. */ 














