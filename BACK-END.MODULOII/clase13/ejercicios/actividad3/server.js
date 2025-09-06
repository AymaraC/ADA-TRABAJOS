const net = require('net');
const PORT = 4002;
const movieController = require('../actividad3/controller/movieController')

const server = net.createServer();
server.on('connection', (socket) => {
    console.log('Se conectó un cliente.');
    
    socket.on('data', (data) => {
        const peliculaSolicitada = data.toString().trim().toLowerCase()
        console.log(`El cliente solicita buscar la pelicula '${peliculaSolicitada}'`)

        const response = movieController.handleRequest(peliculaSolicitada); 
        socket.write(response);
        socket.end()
    });

    socket.on('error', (err) => {
        console.error('ERROR: ',err.message)
    });

    socket.on('end', () => {
        console.log('Conexión terminada.');
    });
});

server.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto...', PORT)
});












