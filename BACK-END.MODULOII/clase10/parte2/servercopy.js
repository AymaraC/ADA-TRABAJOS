const net = require('net');
const PORT = 4000;

let clientes = []; // Lista de clientes conectados

const server = net.createServer((socket) => {
    const idClient = `${socket.remoteAddress}:${socket.remotePort}`;
    clientes.push(socket);

    console.log(`✅ Cliente conectado: ${idClient}`);
    console.log(`Actualmente hay ${clientes.length} clientes.`);

    socket.on('data', (data) => {
        const mensaje = data.toString().trim();
        console.log(`${idClient} dice: ${mensaje}`);

        clientes.forEach((cliente) => {             //Enviamos un mensaje a todos los clientes, también al que nos envió.
            cliente.write(`${idClient}: ${mensaje}`);
        });
    });

    socket.on('end', () => {
        console.log(`Cliente ${idClient} terminó de enviar datos.`);
    });

    socket.on('error', (err) => {
        console.error(`❌ Error con ${idClient}:`, err.message);
    });

    socket.on('close', () => {
        console.log(`🔌 Cliente desconectado: ${idClient}`);
        //Eliminamos al cliente desconectado.
        clientes = clientes.filter((c) => c !== socket);
        console.log(`Quedan ${clientes.length} clientes conectados.`);
    });
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

