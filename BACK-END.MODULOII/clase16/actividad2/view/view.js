const TaskView = {              //Contiene los métodos de la vista, este caso tiene un solo método el formatResponse.

    formatResponse: (task) => {      //El parametro 'task' null o devolver el objeto
        if(!task){                  //Sino hay comando o hubo algún error
            return JSON.stringify({ //Creamos un objeto literal y lo transformamos a JSON ya que el TCP solo recibe texto por el socket.
                status: "error",
                message: "No se pudo realizar la operación."
            })
        } else {
            return JSON.stringify({
                status: 'success',
                data: task
            });
        };
    }
};

module.exports = TaskView;

















