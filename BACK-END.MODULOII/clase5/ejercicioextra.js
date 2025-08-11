//Contador de clientes
/*Consigna: Modificar el servidor TCP para que cuente cuántos clientes están conectados al mismo tiempo y muestre 
este número en la consola. Esto les permitirá entender cómo manejar múltiples clientes y trabajar con variables globales.*/

const net = require ('net');

let clientesConectados = 0;

const PORT = 4000;

const server = net.createServer((socket) => { //Creamos el servidor TCP
        clientesConectados++
        
        console.log(`¡Un cliente se ha conectado! Actualmente se encuentran ${clientesConectados} clientes en línea.`); 
        socket.on('data', (data) =>{
            const mensaje = data.toString()
            console.log(`El cliente nos informa: ${mensaje}`);

            const respuesta = '¡Hola! Recibimos tu mensaje'
            socket.write(respuesta)
            
        });

            socket.on('end',() => {
        console.log('Cliente desconectado.');
    });

});

server.listen(PORT, () => {         
    console.log('Servidor escuchando.. ', PORT)
});
































