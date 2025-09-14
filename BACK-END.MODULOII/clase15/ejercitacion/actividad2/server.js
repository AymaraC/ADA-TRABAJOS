/*Objetivo:
Crear un servidor TCP que responda con un objeto JSON que contenga un UUID v5 basado en un nombre fijo y un espacio de nombres.
1. Servidor TCP (server.js):
-Importar los módulos net y uuid.
-Crear un servidor TCP que genere un UUID v5 basado en un nombre y un espacio de nombres.
-Enviar un objeto JSON con el UUID al cliente.*/

import net from 'net';
import {v5 as uuidv5} from 'uuid'
const PORT = 5000;

const server = net.createServer();
server.on('connection', (socket) => {
    console.log('🔌 ¡Se conectó un cliente!');
    
    const NAMESPACE = uuidv5.URL;
    const name = 'Aymara';
    const idGenerado = uuidv5(name,NAMESPACE) //Genero el uuid uniendo el nombre y el espacio de nombre. Primero se pone el nombre y luego el espacio de nombre.
    console.log(`El ID generado para el cliente es: ${idGenerado}`);

    const objeto = {

    nombre: name,       
    uuid: idGenerado    

};

    const archivoJson = JSON.stringify(objeto)
    socket.write(archivoJson)

    socket.on('error', (err) => {
    console.log('❌ ERROR: ',err.message);
    
    });
  
});


server.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto... ',PORT); 
});




















