/*Objetivo: Crear un cliente TCP que se conecte a un servidor, pero si la
conexión se pierde, debe intentarlo nuevamente cada 3 segundos.*/

const net = require ('net');

const PORT = 5000;

function conectarCliente(){



const client = net.createConnection({port: PORT}, () => {
    console.log('Un cliente se ha conectado.');
    client.write('¡Hola servidor!');
})
client.on('data', (data) =>{
    console.log('Servidor dice.. ', data.toString());
    
})

client.on('close',() =>{
    console.log('Reintentando..');
    setTimeout(conectarCliente,3000)
})

client.on('error', (err) => {
    console.error('Error en la conexión: ',err.message);
    
});







}

conectarCliente()











