const movieView = {

    formatResponse : (movie) => {
        if(!movie){
            return JSON.stringify({
                status: 'error',
                message: 'La película no se encuentra en la lista.'
            })
        } else {
            return JSON.stringify({
                status: 'success',
                data: movie
            })
        }
    }
    
}

module.exports = movieView;