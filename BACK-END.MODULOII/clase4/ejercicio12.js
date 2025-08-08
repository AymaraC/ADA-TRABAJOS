/*Crea un programa que maneje un archivo tareas.json con las siguientes funcionalidades:
1. Agregar una tarea: Cada tarea debe tener nombre, descripcion y estado (pendiente o completa).
2. Completar una tarea: Cambia el estado de una tarea a completa.
3. Listar tareas por estado: Muestra las tareas agrupadas por su estado (pendiente o completa).
Pista: Utiliza métodos como filter y map para manipular la lista de tareas.*/

const fs = require ('fs');

const path = './tareas.json'

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

function agregarTarea(nombre, descripcion, estado){
    const tareas = leerArchivo()
    console.log(tareas)
    const tarea = {
        nombre,
        descripcion,
        estado,
        id: Date.now()

    }
    tareas.push(tarea)
    guardar(tareas)
    console.log(`✅ Tarea "${nombre}" agregada con estado "${estado}" que debe realizar ${descripcion} | ID: ${tarea.id}.`)

};

function marcarTarea(id){
    const tareas = leerArchivo()
    const encontrarTarea = tareas.find(tarea => tarea.id === id)
    if(!encontrarTarea){
        console.log('La tarea ingresada no se encuentra registrada.')
        return;
    }
    encontrarTarea.estado = 'completa'
    guardar(tareas)
    console.log('✔️  Tarea marcada como completa.');
};

function listarTareas(estado){
    const tareas = leerArchivo()
    const tareasPendientes = tareas.filter(tarea => tarea.estado === 'pendiente')
    console.log('Tareas pendientes: ',tareasPendientes);
    const tareasCompletas = tareas.filter(tarea => tarea. estado === 'completa')
    console.log('Tareas completas: ', tareasCompletas)

    const ordenarPendientes = tareasPendientes.map(t => ({nombre: t.nombre, estado: t.estado}))
    console.log('Tareas pendientes: ', ordenarPendientes)
    const ordenarCompletas = tareasCompletas.map(t => ({nombre: t.nombre, estado: t.estado}))
    console.log('Tareas completas: ', ordenarCompletas)
}

agregarTarea('zoe','pasear a zoe', 'pendiente')
agregarTarea('estudiar', 'modulos y servidores', 'pendiente')
agregarTarea ('ejercicios', 'terminar los ejercicios','completa')
agregarTarea ('compras', 'comprar galletitas, leche, pan', 'completa')
agregarTarea ('entrenar', 'hacer abdominales', 'pendiente')

marcarTarea(1754660262140)

listarTareas()





