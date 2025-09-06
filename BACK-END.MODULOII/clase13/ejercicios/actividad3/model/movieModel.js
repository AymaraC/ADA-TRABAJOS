const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, 'movies.json');

const movieModel = {
    encontrarPelicula: (peliculaSolicitada) => {
        const data = fs.readFileSync(dataPath);
        const lecturaDeArchivo = JSON.parse(data);
        return lecturaDeArchivo.find(p => p.titulo === peliculaSolicitada) || null;
    }
};

module.exports = movieModel;






















