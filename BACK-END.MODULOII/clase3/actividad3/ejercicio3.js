/*Consigna: Crea un programa para gestionar tus tareas pendientes. El programa debe permitirte:
1. Agregar una tarea: Registrar una tarea pendiente con su descripción.
2. Listar las tareas: Mostrar todas las tareas registradas.
3. Eliminar una tarea: Eliminar una tarea de la lista.*/

const fs = require ('fs');
const path = './tareas.json';

function leerArchivo(){             //revisa si existe json
    if(!fs.existsSync(path)){
        fs.writeFileSync(path, '[]', 'utf-8') //sino existe crea el archivo con un array vacío
    }

    const contenido = fs.readFileSync(path, 'utf-8') //lee el archivo
    return JSON.parse(contenido)        //lo devuelve como un array de tareas
}

function guardarTarea(tarea){
    fs.writeFileSync(path, JSON.stringify(tarea,null,2), 'utf-8') //modifico el archivo existente
}

function agregarTarea(contenido){
    const tareas = leerArchivo()        //Lee el array que se encuentra en el JSON
    tareas.push({id : tareas.length + 1, contenido})
    guardarTarea(tareas)    //Guardamos el array con la nueva tarea.
    console.log(`✔️  La tarea ${contenido} fue agregada con éxito.`)
}

function listarTareas(){
    const tareas = leerArchivo() 
    if(tareas.length === 0){
        console.log(`No hay tareas pendientes.👏`)
        return              //para cortar la función para que no siga ejecutandose el código
    } 
    console.log("Las tareas que están pendientes son: ")
    
    tareas.forEach(tarea => {
        console.log(`[${tarea.id}] ${tarea.contenido}`);
    });
}

function eliminarTarea(id){
    const tareas = leerArchivo()
    const tareasEliminadas = tareas.filter(tarea => tarea.id !== id) //mantenemos todo menos la tarea que queremos eliminar

        if (tareas.length === tareasEliminadas.length) {
        console.log(`No se encontró tarea con id ${id}`);
        return;
    }

    guardarTarea(tareasEliminadas);
    console.log(`✔️  Tarea con id ${id} eliminada.`);
}

agregarTarea("Estudiar JavaScript");
listarTareas();
eliminarTarea(3);




















