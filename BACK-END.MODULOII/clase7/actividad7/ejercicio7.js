const net = require('net');
const PORT = 5000;
let clientes = [];

const server = net.createServer();
server.on('connection', (socket) => {
    console.log('¡Se conectó un cliente!');
    socket.write('¡Bienvenido!');
    clientes.push(socket)

    clientes.forEach(cliente => {
        if (cliente !== socket) {
            cliente.write('Un nuevo cliente se ha conectado.\n');
        }
    });

    socket.on('data', (data) => {
        const mensaje = data.toString()
        clientes.forEach((cliente) => {
            if(cliente !== socket){
                cliente.write(mensaje)
            }
        })
    })

    socket.on('error',(err) => {
        console.error('ERROR: ',err.message)
    });

    socket.on('end', () => {
        clientes= clientes.filter(cliente => cliente !== socket)

    clientes.forEach(cliente => {
            cliente.write('Un cliente se ha desconectado.\n');
        });
        
        console.log('Conexión finalizada.');
    })
    socket.on('close', () => {
        console.log('Conexión finalizada.');
        
    });

});

server.listen(PORT, () => {
    console.log('Servidor escuchando en puerto ',PORT);
});
