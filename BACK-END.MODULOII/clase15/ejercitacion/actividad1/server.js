/*Crear un servidor TCP que asigne un UUID v4 único a cada conexión y envíe el UUID de vuelta al cliente.
1. Servidor TCP (server.js):
-Importar los módulos net y uuid.
-Crear un servidor TCP que genere un UUID v4 para cada conexión y envíe el UUID al cliente.*/

import net from 'net';
import {v4 as uuidv4} from 'uuid'; //v4 es el nombre original que exporta el paquete, as uuidv4 es el nombre que vos le ponés para usarlo dentro de tu código
const PORT = 4000;

const server = net.createServer();
server.on('connection', (socket) => {
    console.log('¡Se conectó un cliente!');
    
    const idV4 = uuidv4()
    console.log(`El ID asignado al cliente es: ${idV4}`);
    socket.write(`Se le asigno el ID: ${idV4}`)

    socket.on('error', (err) => {
    console.error('ERROR: ',err.message)
});

    socket.on('end', () => {
    console.log('🔌El cliente se desconectó.');
    
});
    socket.on('close', () => {
    console.log('Conexión finalizada.')
    
    });
    
});

server.listen(PORT, () => {
    console.log('Servidor escuchando el puerto...', PORT);
    
});














