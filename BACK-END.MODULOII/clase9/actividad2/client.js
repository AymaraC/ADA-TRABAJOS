/*Objetivo: Simular un cliente que pausa la recepción de datos por 5 segundos y luego la reanuda.*/

const net = require ('net')
const PORT = 5000;

const client = net.createConnection({port: PORT}, () => {
    console.log('Un cliente se ha conectado');
    client.write('Hola servidor')
});

client.on('data', (data) => {
    console.log('Mensaje del cliente...', data.toString());
});

setTimeout(()=>{
    console.log('Pausando por 3 segundos..');
    client.pause()
},3000);


setTimeout(()=>{
    console.log('Reanudando tras ocho segundos..');
    client.resume()
},8000);


setTimeout(()=>{
    console.log('Cerrando la conexión');
    client.end()
},15000);

