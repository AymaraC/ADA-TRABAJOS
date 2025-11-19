// Any toma cualquier promesa que se resuelva

const promesa4 = Promise.reject('Error en promesa 4');
const promesa5 = new Promise((resolve, reject) => {
    setTimeout(resolve,100,'Hola')
})

const promesa6 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'mundo')
})

// Utilizamos promise 
Promise.any([promesa4, promesa5, promesa6])
    .then((resultados) => {
        console.log('Primera promesa resuelta: ', resultados);
    })
    .catch((error) => {
        console.error('Todas las promesas fueron rechazadas: ', error)
    });









