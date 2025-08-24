/*Objetivo: Implementar un cliente TCP que permita al usuario ingresar comandos desde la terminal, 
los valide antes de enviarlos y cierre la conexión si se recibe una respuesta específica del servidor.*/

const net = require('net');
const readline = require('readline');
const PORT = 5000;

const rl = readline.createInterface({         //Creamos la interfaz rl para que se puedan ingresar comandos desde la terminal.
    input: process.stdin,   //Entrada por terminal
    output: process.stdout  //Salida por consola
});

const client = net.createConnection({port: PORT}, () => {
    console.log('Conexión exitosa con el servidor. Escribe un mensaje: ');
});

//Cuando recibimos data del servidor se ejecuta este evento:
client.on('data', (data) => {
    const mensaje = data.toString().trim() //Utilizamos el .toString() para que no nos traiga el mensaje en formato buffer y utilizamos el .trim() para eliminar espacios
    console.log(`Servidor dice: ${mensaje}`);   //Mostramos lo que el servidor nos envío.
    
    if(mensaje.toUpperCase() === 'EXIT'){     
        console.log('Saliendo del programa.. ¡Hasta luego!');
        client.end(); //Si el servidor escribe exit cerramos la conexión.
    }
});

client.on('error', (err) => {
    console.error('❌ ERROR: ', err.message)
});

client.on('close', () => {      //Para cuando la conexión se cierra ya sea servidor o cliente.
    console.log('Conexión finalizada.');
    rl.close()      //También cierra la interfaz de lectura.
});

rl.on('line', (input) => {      //El evento 'line' escucha cada línea que escribimos en la terminal.
    const mensaje = input.toUpperCase().trim()

    if(/^CMD_\w+$/.test(mensaje)){ //Validamos el formato. Debe empezar con "CMD_" seguido de letras, números o guiones bajos.
        client.write(mensaje)
        console.log(`✅ Mensaje enviado: ${mensaje}`);      //Enviamos el mensaje al servidor.
    
    }else{
        console.log('⚠️  Mensaje inválido. Por favor, utiliza CMD_PALABRAQUEQUIERUSAR');
        
    }
});











































