/*Promise.rejected() COPIAR DEFINCION*/
const error = 'Algo salió mal';
//Creamos una promesa rechazada
const promesaRechazada = Promise.reject(error);
promesaRechazada
    .catch((error) => {
        console.error('Error de la promesa: ', error);
    });






