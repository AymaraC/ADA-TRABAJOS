const path = require('path');
const net = require('net');
const readlineSync = require('readline-sync');

const PORT = 8082;

const client = net.createConnection(PORT);
client.on('connect', () => {
    console.log('Conexión exitosa. Conectado al servidor ✅')   
});

const ruta = readlineSync.question('¡Bienvenido! Ingrese la ruta: ');
client.write(ruta);

client.on('data', (data) => {
    console.log('Respuesta del servidor: ',data.toString());    //El servidor nos devuelve la ruta normalizada.
    client.end()
});

client.on('error', (err) => {       //Manejamos los errores.
    console.error('ERROR: ', err.message)
});

/* Rutas de prueba:
C:\Users\Admin\Documents\file.txt 
respuesta: 
Directorio: C:\Users\Admin\Documents
Archivo: file.txt
Extensión: .txt 

C:\Users\Admin\Documents\..\Pictures\image.png 
respuesta:
Directorio: C:\Users\Admin\Documents\..\Pictures
Archivo: image.png
Extensión: .png

D:\Projects\MyApp\.\index.js 
respuesta:
Directorio: D:\Projects\MyApp\.
Archivo: index.js
Extensión: .js

C:\Temp\Logs\\error.log 
respuesta:
Directorio: C:\Temp\Logs\
Archivo: error.log
Extensión: .log */