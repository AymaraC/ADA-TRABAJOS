const net = require('net');
const PORT = 4000;

let clientes = []; // Lista de clientes conectados

const server = net.createServer((socket) => {
    const idClient = `${socket.remoteAddress}:${socket.remotePort}`;
    clientes.push(socket);

    console.log(`✅ Cliente conectado: ${idClient}`);
    console.log(`Actualmente hay ${clientes.length} clientes.`);

    // Cuando recibimos datos de un cliente
    socket.on('data', (data) => {
        const mensaje = data.toString().trim();
        console.log(`${idClient} dice: ${mensaje}`);

        // Broadcast: enviamos a todos los clientes, incluido el que envió
        clientes.forEach((cliente) => {
            cliente.write(`${idClient}: ${mensaje}`);
        });
    });

    socket.on('end', () => {
        console.log(`⏹Cliente ${idClient} terminó de enviar datos.`);
    });

    socket.on('error', (err) => {
        console.error(`❌ Error con ${idClient}:`, err.message);
    });

    socket.on('close', () => {
        console.log(`🔌 Cliente desconectado: ${idClient}`);
        // Lo eliminamos de la lista de clientes
        clientes = clientes.filter((c) => c !== socket);
        console.log(`Quedan ${clientes.length} clientes conectados.`);
    });
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

