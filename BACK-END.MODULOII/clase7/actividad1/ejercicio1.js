/*Crea un servidor TCP que actúe como un servidor de eco. Cuando un cliente se conecte, el servidor debe recibir los datos
enviados por el cliente y devolverlos exactamente igual (hacer un "eco"). Además, el servidor debe imprimir en la consola 
cada vez que un cliente se conecta, desconecta o envía datos.*/

const net = require('net')

const server=net.createServer((socket) => {
    console.log('El cliente se ha conectado.');
    socket.on('data',(data) =>{
        console.log('Datos recibidos: ',data.toString());
        socket.write(data)
    })

    socket.on('end', () => {
        console.log('El cliente se desconecto.');
        
    })
    socket.on('close',()=> {
        console.log('Se cerró la conexión.');
        
    })
})

server.listen(3000, () =>{
    console.log('Servidor escuchando en el puerto 3000');
    
});