/*Promise.race() COPIAR DEFINICION*/

const promesa7 = new Promise((resolve) => {
    setTimeout(resolve, 2000, 'Promesa 1 compleada');
});

const promesa8 = new Promise((resolve) => { //Gana esta porque tiene un menor tiempo para completarse
    setTimeout(resolve,1000, 'Promesa 2 completada')
});

// Usamos Promise.race() para obtener el resultado de la primera que se realice
Promise.race([promesa7, promesa8])
    .then((resultado) => {
        console.log(`Resultado de la promesa ganadora: ${resultado}`);
    });











