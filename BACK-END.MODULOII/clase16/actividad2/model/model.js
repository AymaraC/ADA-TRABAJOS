//Importamos modulo fs y path
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'tasks.json'); 

const TasksModel = {

    getTasks: () => {
        const readFile = fs.readFileSync(dataPath, 'utf-8'); //Utilizamos el 'utf-8' para que ya sea un string
        return readFile;                            //El return devuelve el valor a quien llamó a la función u objeto, en este caso al controlador.
    },

    addTasks: (description) => {
        const readFile = fs.readFileSync(dataPath,'utf-8');
        const tasks = JSON.parse(readFile)   //Cargamos las tareas existentes para que tengamos el array en donde cargar las tareas
        tasks.push(description);             //Agrego la nueva tarea al array existente.
        fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2)); //Guardo la nueva tarea al array tasks
        return description;                 //Devuelvo la nueva tarea agregada.
    },

    deleteTask: (ID) => {
        const readFile = fs.readFileSync(dataPath, 'utf-8');
        const task = JSON.parse(readFile);
        const deleteTask = task.filter(t => t.ID !== ID) //Devuelve un nuevo array sin la tarea que tenía el ID solicitado.

        if(deleteTask.length === task.length){
            return false;           //Si miden lo mismo significa que no encontró la tarea.
        };

        fs.writeFileSync(dataPath, JSON.stringify(deleteTask, null, 2));
        return true;            //Tarea eliminada correctamente.

    }


}

module.exports = TasksModel;









