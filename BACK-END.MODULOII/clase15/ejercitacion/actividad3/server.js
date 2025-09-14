/*Objetivo:
Crear un servidor TCP que responda con un objeto JSON que contenga un UUID v1 basado en el tiempo y la dirección MAC.
1. Servidor TCP (server.js):
-Importar los módulos net y uuid.
-Crear un servidor TCP que genere un UUID v1 basado en el tiempo.
-Enviar un objeto JSON con el UUID al cliente.*/

import net from 'net';
import {v1 as uuid1} from 'uuid';
const PORT = 8080;

const server = net.createServer();
server.on('connection', (socket) => {
    console.log('🔌 ¡Un cliente se conectó!');
    
    const id = uuid1();

    const objeto = {
        mensaje: `El id generado es: ${id}`
    };

    const archivoJson = JSON.stringify(objeto)
    socket.write(archivoJson)

    socket.on('error', (err) => {
    console.log('❌ ERROR: ',err.message);
    });

      socket.on('close', () => {
        console.log('Conexión con el cliente finalizada.');
        
    })
});
  

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto... ${PORT}`);
    
});
















