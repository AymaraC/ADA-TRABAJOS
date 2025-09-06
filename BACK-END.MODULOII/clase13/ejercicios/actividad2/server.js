const net = require('net');
const PORT = 4001;
const hotelController = require('./controllers/hotelControllers'); // Importamos el controlador 

const server = net.createServer();
server.on('connection', (socket) => {
    console.log('Se conectó un cliente.');
    
    socket.on('data', (data) => {
    const hotelID = data.toString().trim()
    console.log(`El hotel solicitado por el cliente tiene el ID: ${hotelID}`);

    const response = hotelController.handleRequest(hotelID) //Llamamos al controller y nos devuelve la respuesta ya formateada.

    socket.write(response)      //Le enviamos la respuesta recibida por el controller al cliente
    socket.end()  //Cierro la conexión después de enviar la respuesta.
    });

    socket.on('end', () => {        //Escuchamos cuando se cierra la conexión ya sea por el servidor o el cliente.
        console.log('🔌Cliente desconectado.');
        
    });

});

server.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto...', PORT);
});
    
/*Servidor (server.js)
Objetos usados: hotelController(objeto que exportamos de nuestro MVC)
Puerto: 4001
Función:
Escucha conexiones TCP.
Recibe el ID del cliente.
Llama a hotelController.handleRequest(hotelId).
Envía la respuesta formateada al cliente.
Cierra la conexión.*/







