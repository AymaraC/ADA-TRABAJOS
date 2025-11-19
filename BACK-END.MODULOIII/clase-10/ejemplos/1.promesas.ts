//Creamos una promesa
const miPromesa = new Promise((resolve, reject) => {
    console.log(`Estado: Pendiente. La operación ha comenzado...`);
    //Nos indica que la operación comenzó y la promesa está pendiente.

    //Simulacion de una operacion asincrona con setTimeout
    setTimeout(() => {
        //Generamos un valor booleano aleatorio, true = exito / false = fallo
        const exito = Math.random() > 0.5;  //Solo nos va a dar true o false

        if(exito) { 
            resolve('Operación completada con éxito.') //El que se ejecuta si es true
        } else {
            reject('Error la operación falló.') //Si la operacion falla, rechazamos la promesa con un mensaje de error.
        }
    }, 2000)    //La operacion se simula que toma dos segundos
})

// Manejo de la promesa
miPromesa
    .then((resultado) => {
        //Este bloque se ejecutará si la promera se resuelve con éxito.
       console.log(`Éxito: `, resultado); 
    })
        // Este bloque se va a ejecutar si la promesa es rechazada
    .catch((error) => {
        console.error(`Error: `, error);
    })
    .finally(() => {
        //Este bloque se ejecutara siempre que la promesa finalice, independientemente del resultado.
        console.log(`Promesa finalizada.`)
    })
    
    //Este bloque se imprimira en consola inmediatamente después de crear la promesa, pero antes de que está se complete.
    console.log('Promesa creada, esperando resultado...');
    


