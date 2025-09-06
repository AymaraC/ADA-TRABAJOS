// Importamos el módulo 'net'
const net = require('net');

// Creamos una conexión TCP
const client = net.createConnection({port: 4000}, () =>{
    console.log('Conectado al servidor');

    // Enviamos un ID del vehiculo al servidor
    const vehicleId =  "2" //Lo podemos modificar para hacer pruebas
    client.write(vehicleId) // Envía el ID al servidor
});

// Escuchamos el evento data
client.on('data', (data) => {
    // Convertimos los datos a una cadena de texto
    console.log('Respuesta del servidor: ',data.toString());

    // Cerramos la conexión
    client.end()
    });

    // Escuchamos el evento 'end'
    client.on('end', () => {
        console.log('Conexión cerrada.');
    });