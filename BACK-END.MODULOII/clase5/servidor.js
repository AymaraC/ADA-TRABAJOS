/*Crea un archivo llamado servidor.js. 
2. Importa el módulo que te permite trabajar con servidores TCP 
(net). 
3. Usa el método que crea un servidor. 
Pista: Este método necesita una función que se ejecuta 
cuando alguien se conecta. 
4. Configura el servidor para que escuche en el puerto 5000. 
Pista: Usa el método que pone al servidor "a escuchar". 
5. Agrega un mensaje en la consola para confirmar que el servidor 
está listo.*/

const net = require ('net')

const PORT = 5000 //crear variable para darle flexibilidad y solo cambiar el numero del puerto 

server.listen(PORT, () => {
    console.log('Cliente escuchando en el puerto ', PORT)
})

/*Objetivo: Mostrar en la consola cuando un cliente se conecta al servidor. 
Guía paso a paso: 
1. Revisa la función que agregaste al crear el servidor. 
o Pista: Esa función se ejecuta cada vez que un cliente se 
conecta. 
2. Dentro de esa función, agrega un mensaje en la consola que diga: 
"¡Un cliente se ha conectado!". 
3. Verifica que el mensaje aparezca cuando el servidor recibe una 
conexión. */

const servidor = net.createServer((socket) => {
    console.log('¡Un cliente se ha conectado!')
})

/*Objetivo: Mostrar en la consola cualquier mensaje que el cliente envíe al 
servidor. 
Guía paso a paso: 
1. Usa el evento data para detectar cuando el cliente envía datos. 
Pista: El evento se llama en el socket que representa la 
conexión del cliente. 
2. En el callback del evento, convierte los datos recibidos (buffer) en 
texto usando .toString(). 
3. Muestra el mensaje en la consola con un texto como: 
"Mensaje recibido del cliente: <mensaje>".*/

socket.on('data', (data)=>{
    const mensaje = data.toString() //guardo en una constante la data que entra en un formato string para que sea legible
    console.log('Mensaje recibido del cliente: ', mensaje)

//Ejercicio 4, se envia al cliente una respuesta.
    const respuesta = 'Mensaje recibido, correctamente.'
    socket.write(respuesta)

})

//Ejercicio 5, mostrar mensaje de finalización.
    socket.on('end',()=>{
        console.log('Cliente desconectado.')
    })













