/*Importamos el módulo 'net' que nos permite trabajar con servidores TCP*/
const net = require('net');

// Definimos el puerto en el que el servidor estará escuchando conexiones
const PORT = 5000;
// Iniciamos el servidor y lo ponemos a escuchar en el puerto definido



// Creamos el servidor TCP usando la función createServer del módulo 'net'
const server = net.createServer((socket) => {
    // Este mensaje aparece cuando un cliente se conecta al servidor
    console.log('¡Un cliente se ha conectado!');

    // Escuchamos el evento 'data', que se activa cuando el cliente envía datos al servidor
    socket.on('data', (data) => {
        // Mostramos en la consola el mensaje recibido del cliente
        console.log('Mensaje recibido:', data.toString());
        socket.write('Servidor recibió: ' + data.toString()); //El servidor envía de vuelta lo que recibió, es un 'eco' porque el servidor devuelve el contenido recibido.
    });

    // Escuchamos el evento 'end', que se activa cuando el cliente se desconecta del servidor
    socket.on('end', () => {
        // Mostramos un mensaje en la consola indicando que el cliente se ha desconectado
        console.log('El cliente se ha desconectado.');
    });
});

server.listen(PORT, () => {
    // Mostramos un mensaje en la consola indicando que el servidor está listo
    console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
});