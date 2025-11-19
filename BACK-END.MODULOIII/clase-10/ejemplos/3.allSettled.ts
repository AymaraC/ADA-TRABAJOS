// Generamos dos promesas básicas
const promesa1 = Promise.reject('Error en promesa 1');
const promesa2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Hola')
});

const promesa3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'chicas de Back');
});

Promise.allSettled([promesa1, promesa2, promesa3])
.then((resultados) => {
    console.log('Primera promesa resultado: ', resultados)
})
.catch((error) => {
    console.error('Todas las promesas fueron rechazadas: ',error)
})



