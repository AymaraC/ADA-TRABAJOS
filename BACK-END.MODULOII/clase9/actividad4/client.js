/*Objetivo: Enviar mensajes cada 5 segundos y cerrar la conexión tras 20 segundos.*/

const net = require('net');

const PORT = 5000;

const client = net.createConnection({port: PORT}, () => {
    console.log('Se conectó un cliente.');
    client.write('¡Hola servidor!')
});

client.on('data', (data) => {
    console.log('Datos recibidos del servidor: ', data.toString());
});

const intervalo = setInterval(() => {       //Repite el mensaje indefinidamente, cada cinco segundos.
    client.write('Mensaje automático')
}, 5000);

setTimeout(() => {
    clearInterval(intervalo)        //Detiene el envío de mensajes
    client.end()
}, 20000);

client.on('close', () => {
    console.log('Se cerró la conexión.');
});





























