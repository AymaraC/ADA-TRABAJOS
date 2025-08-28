/*chunk es un Buffer con los datos que envió el cliente en ese data.*/
const net = require('net');
const fs = require('fs');
const PORT = 5000;

const server = net.createServer();
server.on('connection', (socket) => {
    console.log('✔️  Se conectó un cliente.');
    
    let contenidoArchivo = ''
    let tamañoArchivo = 0
    const MAX_SIZE = 1024 * 1024;           //Porque solo se acepta hasta 1MB 

    socket.on('data', (chunk) => {
        tamañoArchivo += chunk.length;      //Sumamos la cantidad de bytes recibidos del chunk actual al total que llevamos del archivo

        if (tamañoArchivo > MAX_SIZE) {
            socket.write('❌ Archivo demasiado grande. Conexión cerrada.');
            socket.end();
            return; 
        }

        contenidoArchivo += chunk.toString();   //Convierte el buffer, en texto legible
        socket.write(`✅ Recibidos ${tamañoArchivo} bytes`);
    });

    socket.on('end', () => {

        fs.writeFile('archivo_recibido.txt', contenidoArchivo, (err) => {
            if (err) {
                console.error('Error al guardar archivo:', err);
                socket.write('❌ Ocurrió un error al guardar el archivo.');
            } else {
                socket.write('✅ Archivo recibido correctamente.');
            }
        });
    });

    socket.on('error', (err) => {
        console.error('ERROR: ', err.message);
    });

    socket.on('close', () => {
        console.log('Conexión finalizada con este cliente.');
    });
});

server.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto...',PORT);
    
});
