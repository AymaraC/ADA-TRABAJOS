/*1. Crea un archivo llamado servidor.js. 
2. Importa el módulo que te permite trabajar con servidores TCP (net). 
3. Usa el método que crea un servidor. 
Pista: Este método necesita una función que se ejecuta 
cuando alguien se conecta. 
4. Configura el servidor para que escuche en el puerto 5000. 
Pista: Usa el método que pone al servidor "a escuchar". 
5. Agrega un mensaje en la consola para confirmar que el servidor está listo.*/

const net = require ('net');

const PORT = 5000 //crear variable para darle flexibilidad y solo cambiar el numero del puerto.

const server = net.createServer((socket) => {     //Ejercicio 2: creamos el servidor TCP utilizando server y mostramos con el console que el cliente se conectó.
    console.log('¡Un cliente se ha conectado!')
    socket.on('data', (data)=>{
    const mensaje = data.toString() //guardo en una constante la data que entra en un formato string para que sea legible 
    // porque el servidor recibe los datos del cliente en forma de buffer(sistema binario). Este es el ejercicio 3.
    console.log('Mensaje recibido del cliente: ', mensaje)
//Ejercicio 4: Responder al cliente
    const respuesta = '¡Hola Cliente!'
    socket.write(respuesta)
        });

//Ejercicio 5: Detectar cuando el cliente se desconecta 

    socket.on('end',() => {
        console.log('Cliente desconectado.');
        
    })

});

server.listen(PORT, () => {         //para que el servidor escuche en el puerto definido
    console.log('Cliente escuchando en el puerto ', PORT)
});












