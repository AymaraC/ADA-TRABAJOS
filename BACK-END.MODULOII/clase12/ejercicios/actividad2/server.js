/*Objetivo: Crear un servidor TCP que normalice las rutas recibidas utilizando path.normalize y envíe la ruta 
normalizada al cliente.
1. Configuración del Servidor:
o Crea un servidor TCP que escuche en un puerto específico (por ejemplo, 8081).
2. Comando para Normalizar Rutas:
o El servidor debe recibir una ruta desde el cliente.
o Usa path.normalize para normalizar la ruta.
3. Responder al Cliente:
o Envía la ruta normalizada al cliente.*/

const net = require('net');
const path = require('path');
const PORT = 8081;

const server = net.createServer();
server.on('connection', (socket) => {
    console.log('🔌¡Se conectó un cliente!');

    socket.on('data', (data) => {
    const mensaje = data.toString()
    console.log(`Mensaje recibido por el cliente: ${mensaje}`);
    const ruta = path.normalize(mensaje); //Normalizamos la ruta
    socket.write(`Ruta normalizada: ${ruta}`);
    console.log('Le enviamos al cliente la ruta normalizada ',ruta);
});

    socket.on('end', () => {
        console.log('El cliente se desconectó.');
        
    });

    socket.on('error', (err) => {
        console.error('❌ ERROR: ',err.message)
    });

    socket.on('close', () => {
        console.log('Se cerró la conexión.');
        
    });
    
});

server.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto...',PORT);
});






















