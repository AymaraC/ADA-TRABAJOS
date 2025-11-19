// Generamos tres promesas de ejemplo
const promesa1 = Promise.resolve(3);
// Creamos una promesa que se resuelve inmediatamente con el valor 3.
const promesa2 = new Promise((resolve,reject) => {
    // Creamos una promesa que se resuelva después de 100 milisegundos
    setTimeout(resolve,100,'Hola');
    // Después de 100 milisegundos, la promesa se resuelve con el valor 'Hola'
});

const promesa3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'Hola mundo');
});

Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => {
        //Si todas las promesas se resuelven con éxito, se ejecuta este bloque
        console.log('Resultado de todas las promesas: ', resultados)
        //Los resultados van a aparecer en el mismo orden de las promesas
    })
    .catch((error) => {
            console.error('Una de las promesas fue rechazada: ', error)
        });
