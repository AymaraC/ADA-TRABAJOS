const taskView = require('../view/view');
const taskModel = require('../model/model');

const taskController = {

    getTasks: () => {
        const tasks = taskModel.getTasks();       //Llamamos al modelo y obtenemos las tareas del almacenadas en el modelo
        return taskView.formatResponse(tasks);    //Devuelve el string JSON formateado
    },
    
    
    addTask : (description) => {
        const task = taskModel.addTasks(description); //Llama al modelo para agregar la tarea
        return taskView.formatResponse(task)          //Formatea la nueva tarea para el cliente

    },

    deleteTask: (ID) => {
        const task = taskModel.deleteTask(ID);         //Intenta eliminar la tarea.
        return taskView.formatResponse(task);         //Depende si es true/false es lo que devuelve, que la pudo eliminar o un error.
    }

};

module.exports = taskController;


















