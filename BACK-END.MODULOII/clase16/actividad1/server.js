const net = require('net');
const fs = require('fs');
const path = require('path');
const PORT = 3000;

//Creamos una ruta al archivo JSON donde se almacenaran los mensajes
const rutaMensajes = path.join(__dirname, 'mensajes.json') //__dirname significa que estamos en este directorio.

//Creamos el servidor TCP
const server = net.createServer();

server.on('connection', (socket) => {
    console.log('Cliente conectado.');
    
    //Escuchamos mensajes del cliente
    socket.on('data', (data) => {
        const mensaje = data.toString().trim() //Almacenamos los datos enviados por el usuario.
        if(mensaje === '/historial'){
            //Leemos y enviamos el historial de mensajes almacenados en el JSON
            const historial = fs.readFileSync(rutaMensajes, 'utf-8');
            socket.write(`Historial de mensajes: \n' ${historial} \n`)
        } else {
            //Almacenamos los mensajes en el JSON
            const almacenarMensajes = JSON.parse(fs.readFileSync(rutaMensajes, 'utf-8')) //Lo parseamos para poder agregar mensajes en formato JS al array de onjetos.
            almacenarMensajes.push({fecha: new Date().toISOString(),mensaje}) //Ese mensaje es la constante que guardamos en el data.
            fs.writeFileSync(rutaMensajes, JSON.stringify(almacenarMensajes, null, 2));

            //Le enviamos una confirmación al cliente de que su mensaje fue guardado con éxito.
            socket.write('Mensaje guardado con éxito.');
        }
        //El if maneja la data que va a ingresar es mensajes a almacenar o que le mostremos todos los mensajes que están guardados.
    });

    socket.on('error', (err) => {
        console.log('ERROR: ',err.message);
    });

    //Manejamos el evento 'end'(desconexión)
    socket.on('end', () => {
        console.log('🔌Cliente desconectado.');
    });
});

//Iniciamos el servidor
server.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ',PORT);
});














