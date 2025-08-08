/*Consigna: Crea un programa para gestionar proyectos. El programa debe permitirte:
1. Agregar un proyecto: Registrar un proyecto con su nombre y estado (pendiente o en progreso).
2. Listar los proyectos: Mostrar todos los proyectos registrados.
3. Actualizar el estado de un proyecto: Cambiar el estado de un proyecto a "finalizado" o "en progreso".*/

const fs = require ('fs')
const path = './proyectos.json'

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

const agregarProyecto = (nombre, estado) =>{
    const proyectos = leerArchivo()
    const proyecto = {
        nombre,
        estado,
        id: Date.now()
    }
    proyectos.push(proyecto)
    guardar(proyectos)
    console.log(`✔️  Proyecto "${nombre}" agregada con estado "${estado}" | ID: ${proyecto.id}. `)
};

const listarProyectos = () =>{
    const proyectos = leerArchivo()
     if(proyectos.length === 0){
        console.log(`❌No hay proyectos para mostrar.`)
        return
    }
    proyectos.forEach(proyectos => {
        console.log(`Listado de proyectos registrados ${proyectos.nombre} | estado: ${proyectos.estado}`)
    });
};

const actualizarEstado = (id) => {
    const proyectos = leerArchivo()
    const encontrarProyecto = proyectos.find(proyecto => proyecto.id === id)
    if(!encontrarProyecto){
        console.log(`El proyecto cuyo ID es ${id} no se encuentra registrado.`)
    }
    encontrarProyecto.estado = 'finalizado'
    guardar(proyectos)
    console.log(`✔️  El proyecto se marco como finalizado.`)
}

agregarProyecto('Trabajo integrador de Js', 'finalizado')
agregarProyecto('Realizar los ejercicios de la clase 3', 'en proceso')
agregarProyecto('Trabajo de una aplicación', 'en proceso')
listarProyectos()
actualizarEstado(1754581125826)















