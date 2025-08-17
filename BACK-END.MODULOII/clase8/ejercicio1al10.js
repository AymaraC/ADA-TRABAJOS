/*Crea un cliente TCP que:
1. Se conecte a un servidor en localhost:5000.
2. Cuando la conexión se establezca, envíe el mensaje: "¡Hola, servidor!".
3. Escuche los datos recibidos y los muestre en consola.*/

const net = require('net');

const PORT = 5000;
const HOST = 'localhost'

const client = net.createConnection({port: PORT, host: HOST}, () =>{
    console.log('Conectado al servidor.');
    client.write('Hola servidor')
    
    client.on('data', (data) => {           //Capturamos los datos con el evento data.
        console.log('Datos recibidos del servidor ', data.toString());
    })

    client.setTimeout(5000, () =>{          //Ejercicio 2: Implementar un timeout en la conexión 
        console.log('⌛Tiempo de espera agotado.');
        client.end()
    })
});

//Ejercicio 3: Pausar y reanudar la recepción de datos

client.on('data',(data) => {
    console.log('Datos recibidos: ', data.toString());
    client.pause()
    console.log('Pausado por 3 segundos...');
    setTimeout(() => {
        console.log('Reanudando...');
        client.resume();
    },3000);

});

//Ejercicio 4: Manejo de errores en la conexión 

client.on('error',(err) => {
    console.error('❌ Error: '.err)
});

client.on('close', () =>{
    console.log('⚠️ Conexión cerrada inesperadamente'); //Si la conexión se cierra inesperadamente
});

// Ejercicio 5: Detectar cuando el servidor cierra la conexión 

client.on('end', () => {
    console.log('🔌Servidor cerró la conexión.');
});

//Ejercicio 6: Cliente interactivo con la usuaria

const readline = require('readline').createInterface ({
    input:process.stdin,
    output:process.stdout
});

const usuaria = () =>{
    readline.question('Escribí un mensaje: ', (mensaje) =>{ //Le preguntamos a la usuaria y capturamos lo que escribe
        if(mensaje === 'Salir'){
            console.log('Saliendo...');
            client.end();
        } else {
            client.write(mensaje)
            usuaria()
        }
    })
};
client.on('connect', usuaria);

//Ejercicio 7: Cliente que destruye el socket al fallar 

client.on('error', (err) =>{
    console.log('🚫 Conexión destruida.', err);
    client.destroy()
});

//Ejercicio 8: Cliente con unref/ref para control de procesos 

client.unref();
setTimeout(() => {
 console.log('Se mantiene el proceso activo con unref');
 client.ref() //Evita que el proceso termine, lo vuelve a mantener activo
},5000)

//Ejercicio 9: Cliente que reconecta automáticamente 

let reconectar = () => {
    setTimeout(() =>{
        console.log('Intentando reconectar..');
        client.connect(port, host)
    },3000) 
}
client.on('error', reconectar);
client.on('close', reconectar);

//Ejercicio 10: Cliente que detecta pérdida de conexión 

let perdidaConexion = setTimeout(() => {
        console.log('⚠️ No hay datos de servidor, cerrando la conexión..');
        client.end();
    },10000);
    client.on('data', () => {
    clearTimeout(perdidaConexion);
    perdidaConexion = setTimeout(() => {
        console.log('⚠️ No hay datos del servidor, cerrando conexión');
        client.end();
    }, 10000);
});













