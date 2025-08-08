/*Consigna: Crea un programa para registrar eventos. El programa debe permitirte:
1. Agregar un evento: Registrar un evento con nombre, fecha y lugar.
2. Listar los eventos: Mostrar todos los eventos registrados.
3. Eliminar un evento: Eliminar un evento de la lista*/

const fs = require ('fs')
const path = './eventos.json'

function leerArchivo() {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '[]', 'utf-8');
    }

    const contenido = fs.readFileSync(path, 'utf-8');
    return JSON.parse(contenido);           

};

function guardar(array) {
    fs.writeFileSync(path, JSON.stringify(array, null, 2), 'utf-8');

};

function resetear() {
  fs.writeFileSync(path, '[]', 'utf-8');
  console.log('Inventario reseteado.');

};

const agregarEvento = (nombre, fecha, lugar) => {
    const eventos = leerArchivo() //cree el array
    const evento = {
        nombre,
        fecha,
        lugar,
        id: Date.now()
    }
    eventos.push(evento)
    guardar(eventos)
    console.log(`✔️  El evento a realizar el día "${fecha}" en ${lugar} con nombre "${nombre}" fue agregada con éxito. | ID: ${evento.id}. `)
}

const listarEventos = () => {
    const eventos = leerArchivo();
    if(eventos.length === 0){
        console.log(`No hay eventos para mostrar.`);
        return;
    }
    eventos.forEach(eventos => {
        console.log(`Listado de eventos registrados: ${eventos.nombre} a realizar el día ${eventos.fecha}.`)
    });
};

const eliminarEvento = (id) =>{
    const eventos = leerArchivo()
    const eventoAEliminar = eventos.find(evento => evento.id === id);
    if (!eventoAEliminar){
        console.log(`No se encuentra registrado el evento con ID ${id}`)
        return;
       } 
    
    const nuevaLista = eventos.filter(evento => evento.id !== id);

    guardar(nuevaLista)
    console.log(`El evento "${eventoAEliminar.nombre}" con ID ${id} fue eliminado con éxito.`)
}

agregarEvento('Casamiento María', '15/05/2026', 'Olivos')
agregarEvento('15 de Julia', '04/07/2027', 'Martinez')
agregarEvento('Bautismo de Santiago', '10/09/2025')

listarEventos()

eliminarEvento(1754583429945)






