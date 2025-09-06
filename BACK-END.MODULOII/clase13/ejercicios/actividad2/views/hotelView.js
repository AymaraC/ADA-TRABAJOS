const HotelView = {

    formatResponse: (hotel) => {        //hotel es un objeto con los datos, pueden ser null sino lo encontró el model o con los datos si lo encontró.
       if(!hotel){
            return JSON.stringify({
                status: "error",
                message: "El hotel ingresado no se encuentra en nuestra lista."
            })
       } else {
        return JSON.stringify({
            status: "success",
            data: hotel     //Información traida del archivo JSON si es que se encuentra.
        });
       }
    }
}
module.exports = HotelView; //Lo exportamos para que pueda utilizarse

//La vista recibe los datos crudos del modelo, formatea los datos en un formato entendible y devuelve el string formateado.
/*Vista (hotelView.js)
Objeto vista: HotelView
Método principal: formatResponse(hotel)
Función: recibir el hotel (objeto o null) y devolver JSON formateado:
Si hay hotel → { status: "success", data: hotel }
Si no → { status: "error", message: "Hotel no encontrado" }
Exportación: module.exports = HotelView*/