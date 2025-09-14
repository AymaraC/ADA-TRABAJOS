/*Cliente TCP (client.js):
-Importar el módulo net.
-Conectar al servidor TCP, recibir el objeto JSON, parsearlo y mostrar el UUID en la consola.*/

import net from 'net';
const PORT = 8080;

const client = net.createConnection(PORT);
client.on('connect', () => {
    console.log('✅ Conexión exitosa. Conectado al servidor.');
    
    client.on('data', (data) =>{
        const mensajeServidor = data.toString();
        const mensajeJson = JSON.parse(mensajeServidor);
        console.log(mensajeJson);
        client.end() 
    });

    client.on('error', (err) => {
    console.log(' ERROR: ',err.message);
    });

});

















