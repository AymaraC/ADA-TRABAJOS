//Importamos el módulo 'net'
const net = require('net');

// Importamos el controlador, nos va ayudar a manejar la lógica de las solicitudes
const VehicleController = require('../ejemplos/controllers/vehicleController')
// Creamos el servidor TCP
const server = net.createServer((socket) => {
    // Cuando el cliente se conecta se ejecuta este bloque de código
    console.log(('Cliente conectado.'));

    // Escuchamos el evento 'data'
    socket.on('data', (data) => {
        const vehicleId = data.toString().trim()
        console.log(`Solicitud recibida: ID ${vehicleId}`);
        
        // Vamos a llamar al método del controller 'handleRequest'
        // Toma el ID del vehículo y devuelve la respuesta formateada
        const response = VehicleController.handleRequest(vehicleId);

        // Enviar la respuesta al usuario
        socket.write(response)
    });

    // Escuchamos el evento 'end'
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

server.listen(4000, () => {
    console.log('Servidor escuchando en el puerto 4000...');
    
});