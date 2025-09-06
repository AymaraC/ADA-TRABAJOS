const net = require('net');
const readlineSync = require('readline-sync');
const PORT = 4001;

const client = net.createConnection({port: PORT});

client.on('connect', () =>{
    console.log('🔌Conectado al servidor');
    
    const id = readlineSync.question('Por favor ingrese el ID del hotel que quiere consultar: ');
    client.write(id)

})
 client.on('data', (data) => {
        const mensaje = data.toString().trim()
        console.log(`Respuesta: ${mensaje}`); //Respuesta que nos envía el servidor ya formateada que paso por el controller, el model y el view.
        client.end();
    }); 

    client.on('end', () => {
        console.log('Servidor desconectado.');
    });

/*Cliente (client.js)
Modulos usados: net, readline-sync
Función:
Se conecta al servidor.
Pide al usuario ingresar un ID de hotel.
Envía el ID al servidor.
Escucha la respuesta y la muestra en consola.
Cierra la conexión.*/









