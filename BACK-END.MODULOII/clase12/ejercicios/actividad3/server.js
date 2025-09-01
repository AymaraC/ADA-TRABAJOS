/*Objetivo: Crear un servidor TCP que acepte una ruta y responda con la base, el directorio, y la extensión del archivo 
usando path.basename, path.dirname, y path.extname.
Pasos:
1. Configuración del Servidor:
o Crea un servidor TCP que escuche en un puerto específico (por ejemplo, 8082).
2. Comando para Obtener Información de la Ruta:
o El servidor debe recibir una ruta desde el cliente.
o Usa path.basename, path.dirname, y path.extname para obtener la base del nombre, el directorio y la extensión
del archivo, respectivamente.
3. Responder al Cliente:
o Envía la información al cliente en un formato legible*/

const net = require('net');
const path = require('path');
const PORT = 8082;

const server = net.createServer();
server.on('connection', (socket) => {
    console.log('🔌¡Se conectó un cliente!');
    
    socket.on('data', (data) => {
        const mensaje = data.toString()
        const rutaFile = path.basename(mensaje);    //Nos informa el archivo
        const rutaDir = path.dirname(mensaje)       //Nos informa el directorio
        const rutaExt = path.extname(mensaje)       //Nos informa la extensión

        const datos = [
        {tipo: 'Directorio', valor: rutaDir},
        {tipo: 'Archivo', valor: rutaFile},
        {tipo: 'Extensión', valor: rutaExt}
    ]
        let mensajeParaCliente = '';        //Iniciamos una variable vacía en donde se van a ir acumulando todas las líneas (array de objetos) para mostrar al cliente.
        datos.forEach(item => {
        mensajeParaCliente += `${item.tipo}: ${item.valor}\n`;   //Agregamos cada nueva línea al contenido que ya se encuentra en la variable de mensajeParaCliente.
});
        socket.write(mensajeParaCliente);       //Le enviamos la respuesta al cliente
        console.log(mensajeParaCliente);        //Nos muestra por consola al servidor también   
    });

    socket.on('end', () => {
        console.log('El cliente se desconectó.');
    });

    socket.on('error', (err) => {
        console.error('❌ ERROR: ',err.message)
    });

    socket.on('close', () => {
        console.log('Se cerró la conexión.');
    });
    
});

server.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto...',PORT);
});





























