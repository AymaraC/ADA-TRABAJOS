const net = require('net');

const readline = require('readline-sync');

const options = {
    port: 4000,
    host: '127.0.0.1'
};

const client = net.createConnection(options);

client.on('connect', () =>{
    console.log('Conexión exitosa.');
    informacionClientes()
});

client.on('data', (data) => {
    console.log('Mensaje recibido por el servidor: ', data.toString());
    informacionClientes()
});

client.on('error', (err) => {
    console.error('ERROR: ', err.message)
});

function informacionClientes() {
    let info = readline.question('Si desea salir debe escribir 0.\n Ingrese el mensaje: ');
    if(info === '0'){
        console.log('El cliente se desconectó.')
        client.end()
    } else {
        client.write(info)
    }
};
