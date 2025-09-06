const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, 'hotels.json') //dirname es una variable global de node.js que contiene la ruta completa de la carpeta en donde se encuentra el archivo actual. 
// El .join es una funcion del modulo Path que une las partes de ruta y como resultado de esta línea tenemos la ruta completa al archivo JSON.

const InfoHotel = {

        getHotelById: (id) => {

            const leerAchivo = fs.readFileSync(dataPath)
            const hoteles = JSON.parse(leerAchivo);
            return hoteles.find(hotel => hotel.id === id) || null;
        }
}

module.exports = InfoHotel; //Para poder utilizar el objeto modelo.

//El MODELO solo se encarga de los datos: leer, buscar y devolver. No sabe nada de cómo se muestra la info ni de quién la pidió.

/*Modelo (hotelModel.js)
Objeto modelo: InfoHotel
Método principal: getHotelById(id)
Función: leer el archivo hotels.json y devolver el hotel con ese ID, o null si no lo encuentra.
Exportación: module.exports = InfoHotel*/






