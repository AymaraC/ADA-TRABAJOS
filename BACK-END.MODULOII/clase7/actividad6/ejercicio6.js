/*Consigna:
Crea un servidor TCP que permita a los clientes enviar comandos simples. Dependiendo del comando recibido, el servidor 
debe realizar una acción específica:
• Si el cliente envía "fecha", el servidor debe responder con la fecha y hora actual.
• Si el cliente envía "IP", el servidor debe responder con la dirección IP del cliente.
• Si el cliente envía "salir", el servidor debe cerrar la conexión.
• Para cualquier otro comando, el servidor debe responder "Comando no reconocido".*/

const net = require('net');
const PORT = 3000;

const server = net.createServer((socket) => {
    console.log('Un cliente se conectó.');
    socket.on('data',(data) =>{
        const mensaje = data.toString().toLowerCase().trim()
        
        switch(mensaje){
            case 'fecha':
                socket.write (`Fecha y hora actual: ${new Date().toLocaleString()}\n`)
                break;
            case 'ip':
                socket.write(`Tu IP es: ${socket.remoteAddress}\n`)
                break;
            case 'salir':
                socket.write(`¡Gracias por utilizar nuestro programa! Nos vemos.\n`)
                socket.end()
            break;
            default:
                socket.write(`Comando no reconocido.\n`)
        }
        
    })

    socket.on('error', (err) =>{
        console.error('Error del socket', err)

        })

    socket.on('close', () =>{
        console.log('Se cerró la conexión.');
        
        })

    });

server.listen(PORT, () =>{
        console.log('Servidor escuchando en el puerto...', PORT);
});























