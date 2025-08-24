/*Objetivo: Crear un cliente TCP que intente reconectarse si la conexión se pierde, 
pero que abandone después de 5 intentos fallidos.*/

const net = require('net');
const PORT = 5000;
let intentos = 0;
const maximoIntentos = 5;

const contarIntentos = () => {      //Función que muestra en el mensaje final que se llego al máximo de intentos.
    console.log(`❌ Se alcanzó el máximo de intentos ${maximoIntentos}. ¡Hasta luego!`);
};

const conectar = () => {            //Función que crea un cliente y maneja los eventos.
    const client = net.createConnection({ port: PORT }, () => {
        console.log('✅ Se conectó un cliente.');
        intentos = 0;
        client.write('👋 Hola Servidor');
    });

    client.on('data', (data) => {
        console.log('Datos recibidos del servidor: ', data.toString());
    });

    client.on('error', (err) => {
        console.error(`❌ ERROR: ${err.message}`);
    });

    client.on('close', () => {
        intentos++;
        console.log(`⚠️  Conexión cerrada. Intento ${intentos} de ${maximoIntentos}. Reintentando en 2 segundos...`);
        if (intentos < maximoIntentos) {
            setTimeout(conectar, 2000); //Vuelve a intentar despues de 2 segundos, creando un nuevo cliente.
        } else {
            contarIntentos();   //Muestre el mensaje final si se llega al máximo de intentos.
        }
    });
};

conectar(); //Inicia el primer intento de conexión











