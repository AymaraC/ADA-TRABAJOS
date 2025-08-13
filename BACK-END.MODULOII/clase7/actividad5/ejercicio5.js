/*Consigna: 
Crea un servidor TCP que lleve un contador de cuántos clientes se han  conectado. Cada vez que un nuevo cliente se 
conecta, el servidor debe enviarle un mensaje indicando cuántos clientes se han conectado hasta ese momento. 
Cuando un cliente se desconecta, el servidor debe reducir el contador.*/

const net = require('net');

let clientesConectados = 0;
const PORT = 3000

const server = net.createServer((socket) => {
    clientesConectados++
    console.log(`Un cliente se ha conectado, actualmente hay ${clientesConectados} clientes conectados`);
    socket.write(`Te has conectado. Actualmente tenemos ${clientesConectados} clientes conectados en nuestro sistema.`)
    socket.on('close',()=>{
        clientesConectados--
        console.log(`Un cliente se ha desconectado. Quedan en línea ${clientesConectados}`);
        
    })

    socket.on('error', (err) => {
        console.error('Error en el socket:', err.message);
    });

    
    })
    server.listen(PORT, () => {
    console.log('Servidor TCP escuchando en el puerto', PORT)
})












