/*Ejercicio 1: Servidor TCP que Valida Rutas
Objetivo: Crear un servidor TCP que acepte comandos desde el cliente para validar si una ruta es absoluta o relativa, 
y responder con la información correspondiente.
1. Configuración del Servidor:
o Crea un servidor TCP que escuche en un puerto específico (por ejemplo, 8080).
2. Comando para Validar Rutas:
o El servidor debe recibir una ruta desde el cliente.
o Usa path.isAbsolute para verificar si la ruta es absoluta o relativa.
3. Responder al Cliente:
o Envía una respuesta al cliente indicando si la ruta es absoluta o relativa.*/

const net = require('net');
const path = require('path');
const PORT = 8080

const server = net.createServer();

server.on('connection', (socket) => {
    console.log('🔌¡Se conectó un cliente!');
    
    socket.on('data', (data) => {
        const mensaje = data.toString();
        console.log(`Mensaje del cliente: ${mensaje}`);
        const esAbsoluta = path.isAbsolute(mensaje);  //Me devuelve un booleano.
        
        if(esAbsoluta === true){
            socket.write('La ruta es absoluta.');
            console.log(`Servidor: La ruta "${mensaje}" es absoluta`);
        } else {
           socket.write('La ruta es relativa.');
           console.log(`Servidor: La ruta "${mensaje}" es absoluta`);
        }
    });

    socket.on('end', () => {
        console.log('El cliente se desconectó.');
        
    });

    socket.on('error', (err) => {
        console.error('❌ ERROR: ',err.message)
    });

    socket.on('close', () => {
        console.log('Se cerró la conexión.');
        
    });
    
});

server.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto...',PORT);
});

































