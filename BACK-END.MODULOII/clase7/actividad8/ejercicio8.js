const net = require('net');
const PORT = 5000;

function validar(usuario, password) {           //Función que retorna true si las credenciales coinciden.
  return usuario === "administrador" && password === "1234";
}

const server = net.createServer();
server.on('connection', (socket) => {
    console.log('Un cliente se conectó.');
    socket.estado = "esperandoUsuario";         //Definimos un estado personalizado para el socket(cliente)
socket.write("Ingrese su usuario: ");           //Le pedimos el usuario

    
    socket.on('data', (data) => {
        const mensaje = data.toString().trim().toLowerCase()

        switch(socket.estado){          //Evalua el estado actual de cada cliente y decide que hacer con el mensaje recibido.
            case "esperandoUsuario":
                socket.usuario = mensaje;       //Si estaba esperando al usuario guardamos al mensaje en socket.usuario y cambiamos a socket.password
                socket.estado = 'esperandoPassword' 
                socket.write('Ingrese su contraseña.')
                break;
            case "esperandoPassword":
                socket.password = mensaje;      //Acá lo mismo que arriba, si estaba esperando la contraseña, lo guardamos en el mensaje y cambiamos a la función validar()
                if(validar(socket.usuario, socket.password)){
                    socket.estado = 'autenticado';     //En el caso de ser correcta se dispara este mensaje
                    socket.write("✅ Bienvenido, ya puede enviar mensajes \n")
                } else {
                    socket.write("❌ Credenciales incorrectas, \n")     //Si el resultado es false.
                    socket.end()
                }
                break;
                case "autenticado":
                    console.log("Mensaje del cliente: ", mensaje); //Se ejecuta una vez que el cliente ya se encuentra autenticado, nos muestra por consola el mensaje que envío.
                break;
                default:
                    socket.write("Estado desconocido.")
        }
    });

    socket.on('error', (err) => {
            console.error(`❌ ERROR: ${err.message}`)
        });
        
    socket.on('close',() => {
            console.log('La conexión con el cliente se ha terminado.');
        });

});

server.listen(PORT, () =>{
    console.log('Servidor escuchando en el puerto...', PORT);
});