//Importamos el archivo 'hotelModel' y 'hotelView'
const hotelModel = require('../models/hotelModel');
const hotelView = require('../views/hotelView');

//Creamos un objeto modelo el cual contiene métodos para manejar datos.

const hotelController = {
    handleRequest: (hotelId) =>{        //Es el método que llama al controlador con el id que nos envío el servidor que recibió del cliente.
        const hotel = hotelModel.getHotelById(hotelId);   //Llamamos al modelo para obtener los datos
        const response = hotelView.formatResponse(hotel); //Pasamos los datos de la vista para formatearlos
        
        return response;        //Devolvemos la respuesta formateada al servidor
    }
};

module.exports = hotelController;  //Exportamos el objeto modelo para poder utilizarlo.

/*Controlador (hotelController.js)
Objeto controlador: hotelController
Método principal: handleRequest(hotelId)
Función:
Recibe el ID del servidor.
Llama al modelo (InfoHotel.getHotelById)
Pasa el resultado a la vista (HotelView.formatResponse)
Devuelve la respuesta final al servidor.
Exportación: module.exports = hotelController*/







