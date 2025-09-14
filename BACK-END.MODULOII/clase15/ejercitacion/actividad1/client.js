/*Cliente TCP (client.js):
-Importar el módulo net.
-Conectar al servidor TCP, recibir el UUID y mostrarlo en la consola.*/

import net from 'net';
const PORT = 4000;

const client = net.createConnection(PORT);
client.on('connect', () => {
    console.log('✅ Conexión exitosa. Conectado al servidor');
});

client.on('data', (data) => {
    const mensaje = data.toString();
    console.log(mensaje);
    client.end()
});

client.on('error', (err) => {
    console.error('ERROR: ',err.message)
});

client.on('end', () => {
    console.log('Desconectado del servidor.');
    
});






















