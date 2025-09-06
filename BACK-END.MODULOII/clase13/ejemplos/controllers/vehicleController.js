// Importamos el módulo 'VehicleModel' desde la ruta '../models/vehicleModel'
// Este módulo es el que contiene la lógica para obtener los datos de los vehículos
const VehicleModel = require('../model/vehicleModel');

// Importamos el módulo 'vehicleView' desde la ruta '../views/vehicleView'
// Este módulo va a contener la lógica para formatear la respuesta que se le enviará al usuario
const VehicleView = require('../view/vehicleView');

//Creamos un objeto llamado 'VehicleController' que manejará las solicitudes.
const VehicleController = {
    // Método para manejar una solicitud de vehículo por ID
    handleRequest: (id) => {
        // Llamamos al método 'getVehicleById' para obtener los datos del vehículo
        // Convertimos el 'id' a un numero entero usando el 'parseInt' (en base 10)
        const vehicle = VehicleModel.getVehicleById(parseInt(id,10))

        // Llamamos al método 'formatResponse' del 'VehicleView' para formatear la respuesta que llega del modelo
        // Este método lo que hace es tomar los datos vehículo y prepararlos para ser enviados al usuario.
        return VehicleView.formatResponse(vehicle);
    }
};

// Exportamos el objeto 'VehicleController'
module.exports = VehicleController;




















