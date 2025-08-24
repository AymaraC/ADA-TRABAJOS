/*Objetivo: Aplicar ref() y unref() para controlar la terminación del proceso de Node.js*/

const net = require('net');

const PORT = 5000;

const client = net.createConnection({port: PORT}, () => {
    console.log('Conexión exitosa con el servidor.');      //Nos dice por consola que se conectó un cliente.
    client.write('Hi Server.')      //Le enviamos un mensaje al servidor.
});

client.on('data', (data) => {           //Escuchamos los datos del servidor
    console.log('Datos recibidos por el servidor: ', data.toString());
});

client.on('end', () =>{
    console.log('El servidor cerró la conexión.');
})

client.on('error', (err) => {
    console.error('ERROR: ', err.message)
});

client.on('close', () => {
    console.log('Se cerró la conexión.');
});

setTimeout(() => {      //Después de 10 segundos, el proceso termina si no hay otros timers activos.
    console.log('Finalizando luego de 10 segundos..');
    client.unref()
}, 10000);

setTimeout(() => {      //Nos aseguramos que el proceso siga activo.
    console.log('Llamamos a client.ref para que el proceso siga activo.');
    client.ref()
},15000);

setTimeout(() => {      //Utilizamos el metodo end para cerrar la conexión a los 20 segundos.
    console.log('Ya pasaron 20 segundos.. Cerramos conexión.');
    client.end()
}, 20000);


























