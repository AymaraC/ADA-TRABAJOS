function formatRespuesta(libro){
    if(!libro){
        return JSON.stringify({
            error: 'Libro no encontrado'

        })
    }
    return JSON.stringify({success:true, libro: libro}, null, 2);
}
module.exports = {formatRespuesta}