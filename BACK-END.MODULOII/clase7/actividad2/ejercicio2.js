/*Crea un servidor TCP que cierre automáticamente la conexión con un cliente si no recibe datos en un período de 
10 segundos. Si el cliente envía datos antes de que se cumpla el tiempo, el servidor debe reiniciar 
el contador de tiempo.*/

const net = require('net')

const server = net.createServer((socket) =>{
    console.log('Cliente conectado.');
    socket.setTimeout(10000)
    socket.on('timeout',() =>{
        console.log('Tiempo de espera agotado. Se cerró la conexión.');
        socket.end()
    })
    socket.on('data',(data) =>{
        console.log('Datos recibidos ', data.toString());
        socket.setTimeout(10000)
    })

})
server.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
    
});