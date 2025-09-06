const net = require('net')
const readline = require('readline')
const PORT = 4000;


const rl = readline.createInterface({
    input:process.stdin,
    output : process.stdout
    });

rl.question('Ingrese el ID del libro: ',libroID => {
    const client = net.createConnection({port: PORT}, () => {
    console.log('Conectado al servidor.');
    client.write(libroID)
    });

    client.on('data',(data) => {
        console.log('Respuesta del servidor: ');
        console.log(data.toString());
        rl.close()
    });

    client.on('end', () => {
        console.log('Servidor desconectado.');
    });
});
