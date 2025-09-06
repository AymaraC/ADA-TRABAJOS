// Creamos un objeto llamado 'VehicleView' que contiene métodos para formatear la respuesta de la solicitud.
const vehicleView = {

    formatResponse: (vehicle) => {
        // Verificamos si 'vehiculo' es null o undefined (es decir, no se encontró el vehiculo)
        if(!vehicle){
            return JSON.stringify({
                status:"error", //Indicamos que hubo un error
                message: "Vehículo no encontrado" // Mensaje descriptivo del error.
            })
        }
        return JSON.stringify({
            status: "success", // Indicamos que la operacion fue exitosa
            data: vehicle // Incluimos los datos del vehículo en la respuesta.
        });
    }
} 
//Exportamos el objeto 'VehicleView' para que pueda ser utilizado
module.exports = vehicleView;