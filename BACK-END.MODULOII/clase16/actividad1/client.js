const net = require('net');
const PORT = 3000;
const readline = require('readline');

//Cuando usamos el readline que ya viene integrado tenemos que crear la interfaz
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

//Creamos nuestro cliente y lo conectamos al servidor
const client = net.createConnection({port: PORT}, () => {
    console.log('Conectado al servidor');
    console.log('Escribe un mensaje o utiliza el comando "/historial" para ver los mensajes guardados. Escriba salir para cerrar la conexión')
});

//Escuchamos el mensaje data para recibir la información del servidor
client.on('data', (data) =>{
    const mensajeServidor = data.toString()
    console.log('Mensaje del servidor: ', mensajeServidor);
});

//Manejo de la desconexión
client.on('end', () => {
    console.log('Desconectado del servidor.');
    rl.close() //Estamos cerrando también la interfaz
});

//Crear mensajes desde la terminal y enviarlos al servidor
rl.on('line', (input) => {  //Con line estamos atentos a escuchar la linea(o sea a que se escriba algo) y con input a lo que se escribe
    if(input.trim().toLowerCase() === 'salir'){
        client.end()
    } else {
        client.write(input) //Le enviamos el input al servidor 
    }
});














