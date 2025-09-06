const {formatRespuesta} = require('../view/bookView.js');
const {encontrarLibro} = require('../model/bookModel.js');

function bookController(libroID){
    const libro = encontrarLibro(libroID)
    return formatRespuesta(libro)
}
module.exports = {bookController}