const { handleRequest } = require('../../actividad2/controllers/hotelControllers');
const movieModel = require('../model/movieModel');
const movieView = require('../view/movieView');

const MovieController = {
    handleRequest: (peliculaSolicitada) => {
        const movie = movieModel.encontrarPelicula(peliculaSolicitada);
        const response = movieView.formatResponse(movie);
        return response;
    }
}

module.exports = MovieController