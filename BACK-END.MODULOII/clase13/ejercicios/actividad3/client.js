const net = require('net');
const PORT = 4002;
const readlineSync = require('readline-sync');

const client = net.createConnection({port: PORT});
client.on('connect', () => {
    console.log('Conectado al servidor.');
    
    const askMovie = readlineSync.question('Ingrese el titulo de la pelicula buscada: ').toLowerCase().trim();
    client.write(askMovie);

    client.on('data', (data) => {
        const answerServer = data.toString().trim()
        console.log(`Respuesta del servidor: ${answerServer}`);
        client.end()
    });

    client.on('error', (err) => {
        console.error('ERROR: ',err.message)
    });
    client.on('end', () => {
        console.log('Conexión terminada.');
    });

});
