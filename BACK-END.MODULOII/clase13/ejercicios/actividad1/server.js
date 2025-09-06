const net = require('net')
const PORT = 4000;
const {bookController} = require('./controller/controller')

const server = net.createServer((socket) => {
    console.log('Se conectó un cliente.');

    socket.on('data', (data) => {
        const libroID = data.toString().trim()
        console.log('Solicitud recibida.',libroID);

        const response = bookController(libroID);
        
        socket.write(response)
    })
    socket.on('end', () =>{ 
        console.log('El cliente se desconectó');
        
    });

})
server.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto.. ${PORT}`);
    
});