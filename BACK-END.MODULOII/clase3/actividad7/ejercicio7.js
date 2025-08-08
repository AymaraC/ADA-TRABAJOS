/*Consigna: Crea un programa para gestionar tus tareas diarias. El programa debe permitirte:
1. Agregar una tarea diaria: Registrar una nueva tarea con su descripción y estado.
2. Listar las tareas diarias: Mostrar todas las tareas con su estado.
3. Marcar una tarea como completada: Cambiar el estado de una tarea de "pendiente" a "completada".*/

const fs = require ('fs')
const path = './tareas.json'

function leerArchivo() {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '[]', 'utf-8');
    }

    const contenido = fs.readFileSync(path, 'utf-8');
    return JSON.parse(contenido);           

};


function guardarTareas(array) {
    fs.writeFileSync(path, JSON.stringify(array, null, 2), 'utf-8');

};

function resetear() {
  fs.writeFileSync(path, '[]', 'utf-8');
  console.log('Inventario reseteado.');

};

const agregarTarea = (descripcion, estado) => {
    const tareas = leerArchivo() //creas el nombre del array
    const tarea = {
        descripcion,
        estado,
        id: Date.now()
    }
     tareas.push(tarea)
    guardarTareas(tareas)
    console.log(`✅ Tarea "${descripcion}" agregada con estado "${estado}" | ID: ${tarea.id}.`)
};

const listarTareas = () => {
    const tareas = leerArchivo()
     if(tareas.length === 0){
        console.log(`❌No hay tareas para mostrar.`)
        return
    }
    tareas.forEach(tareas => {
        console.log(`Lista con las tareas diarias: ${tareas.descripcion} | estado: ${tareas.estado}`)
    });
};

const marcarTarea = (id) => {
    const tareas = leerArchivo()
    const encontrarTarea = tareas.find(tarea => tarea.id === id)
    if(!encontrarTarea){
        console.log('No se encontró la tarea.')
        return
    } 
    encontrarTarea.estado = 'completada';
    guardarTareas(tareas);
    console.log('✔️  Tarea marcada como completada.');
    
};

agregarTarea('Pasear a Zoe','completado')
agregarTarea('Ejercicios de JavaScript', 'pendiente')
agregarTarea ('Hacer la comida', 'pendiente')
marcarTarea(1754578761691)

















