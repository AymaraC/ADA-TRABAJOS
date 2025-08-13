/*Consigna:
Crea un servidor TCP que maneje errores de conexión de manera adecuada. Si ocurre un error en la conexión con un cliente, 
el servidor debe imprimir un mensaje de error en la consola y cerrar la conexión con ese cliente. Además, el servidor 
debe seguir funcionando y aceptando nuevas conexiones.*/

const net = require('net');
const { listenerCount } = require('process');

const server=net.createServer((socket)=>{
    console.log('El cliente se ha conectado.');
    socket.on('error', (err) =>{
        console.error(`Error en la conexión ${err.message}`)
        socket.destroy()
    })
})

server.listen(3000,()=>{
    console.log('Servidor escuchando en el puerto 3000.');
    
})