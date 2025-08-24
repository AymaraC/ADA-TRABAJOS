/*Objetivo: Implementar un timeout que cierre la conexión si no recibe datos en 10 segundos.*/

const net = require('net')
const PORT = 5000;

const client = net.createConnection({port:5000}, () => {
    console.log('Se conectó un cliente.');
    client.write('Hola servidor')
});

const timeout = setTimeout(()=>{
    console.log('No se recibieron datos por diez segundos');
    client.destroy()
},10000);

client.on('data',(data) => {
    console.log('Información recibida: ',data.toString());
    clearTimeout(timeout)
    timeout = setTimeout(()=>{
    console.log('No se recibieron datos por diez segundos');
    client.destroy()
},10000);
});


