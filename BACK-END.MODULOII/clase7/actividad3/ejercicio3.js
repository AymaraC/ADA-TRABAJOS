/*Crea un servidor TCP que permita a los clientes enviar mensajes. El servidor debe responder con un mensaje personalizado
dependiendo del contenido del mensaje recibido:
• Si el cliente envía "Hola", el servidor debe responder "¡Bienvenido!".
• Si el cliente envía "Adiós", el servidor debe responder "¡Hasta luego!" y cerrar la conexión.
• Para cualquier otro mensaje, el servidor debe responder "Mensaje recibido: [mensaje del cliente]"*/

const net = require('net')

const server = net.createServer((socket) =>{
    console.log('El cliente se ha conectado.');
    socket.on('data',(data)=>{
        const mensaje= data.toString()
        if(mensaje === 'Hola'){
            socket.write('¡Bienvenido!')
        } else if (mensaje === 'Adios'){
            socket.write('¡Hasta luego!')
            socket.end()
        } else {
            socket.write(`Mensaje recibido del cliente ${mensaje}`) //el .write acepta un solo string
        }
    })
})

server.listen(3000, () =>{
    console.log('Servidor escuchando en el puerto 3000.');
    
})












