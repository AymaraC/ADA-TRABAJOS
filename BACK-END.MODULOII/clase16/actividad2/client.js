const net = require('net');
const readlineSync = require('readline-sync');
const PORT = 5000;

const client = net.createConnection(PORT, '127.0.0.1', () => {
    console.log('🔌 Conectado al servidor');
    showMenu();
});

client.on('data', (data) => {
    console.log(`📩 Servidor dice: ${data.toString()}`);
    showMenu();
});

client.on('end', () => console.log('🔌 Conexión cerrada'));
client.on('error', (err) => console.log('❌ ERROR:', err.message));

function showMenu() {
    const option = readlineSync.question(
        '\n1.Ver tareas\n2.Agregar tarea\n3.Eliminar tarea\nElige una opcion: '
    );

    switch(option) {
        case '1':
            client.write('get tasks');
            break;
        case '2':
            const desc = readlineSync.question('Descripción de la nueva tarea: ');
            client.write(`add tasks ${desc}`);
            break;
        case '3':
            const id = readlineSync.question('ID de la tarea a eliminar: ');
            client.write(`delete task ${id}`);
            break;
        default:
            console.log('❌ Opción invalida');
            showMenu();
    }
}
