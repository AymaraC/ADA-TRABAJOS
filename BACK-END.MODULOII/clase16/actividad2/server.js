const net = require('net');
const taskController = require('./controller/controller');
const PORT = 5000;

const server = net.createServer();
server.on('connection', (socket) => {
    console.log('🔌 ¡Un cliente se conectó!');
    
    socket.on('data', (data) => {
        const command = data.toString().trim().toLowerCase()

        if(command === 'get tasks'){
            const response = taskController.getTasks()
            socket.write(response);

        } else if(command.startsWith('add tasks')){
            const task = command.replace('add tasks ', ''); //Con esta línea reemplazamos el 'add task' por un string vacío para solo guardar la tarea.
            const response = taskController.addTask({description: task}); //Le indicamos al controlador que es un objeto.
            socket.write(response);

        } else if(command.startsWith('delete task')){
            const ID = command.replace('delete task ', ''); //Se le pone espacio para eliminar el espacio al agregar la tarea.
            const response = taskController.deleteTask(ID);
            socket.write(response);

        } else if(command === 'exit'){
            socket.end('👋 ¡Hasta luego!')

        } else{
            socket.write('Comando incorrecto.')
        }

    });

    socket.on('error', (err) => {
    console.log('⚠️ Error en socket:', err.message);
    });

    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });

});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto.. ${PORT}`);
});
















