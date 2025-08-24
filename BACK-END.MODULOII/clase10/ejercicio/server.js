/*Crea un servidor TCP en Node.js que escuche en el puerto 5000. El servidor debe manejar múltiples conexiones de
clientes y mostrar los mensajes recibidos en la consola. Además, el servidor debe responder a cada mensaje con 
una confirmación que diga "Mensaje recibido".*/

const net = require('net');
const PORT = 5000;

const server = net.createServer(); //Creamos el servidor TCP

server.on('connection',(socket) =>{
    const idClient = `${socket.remoteAddress}, ${socket.remotePort}` //Nos da el id del cliente y el puerto al cuál se conectó.
    socket.on('data', (data) => {
    console.log(`El cliente ${idClient} nos dice: ${data.toString()}`);
    socket.write('Mensaje recibido.');
    });

    socket.on('end', () => {        //Para manejar la desconexión del cliente.
        console.log(`El cliente ${idClient} terminó de enviar datos.`);
    });

    socket.on('error', (err) => {
        console.error('Ocurrió un error: ',err.message);
    });

    socket.on('close',()=> {        //Para cerrar el socket, de ese cliente en particular, por completo.
        console.log(`El cliente ${idClient} se desconectó.`);
        
    });
});

server.listen(PORT, () =>{
    console.log('Servidor escuchando en el puerto..', PORT);
    
});
