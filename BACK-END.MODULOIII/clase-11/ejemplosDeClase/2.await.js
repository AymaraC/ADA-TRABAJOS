// Función que simula un proceso asíncrono, tardará tres segundos en completarse
function proceso() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Proceso completado`), 3000)
    })
}

// Función principal que usa 'await' para esperar el resultado de la función proceso
async function ejecutarProceso() {
    console.log(`Iniciando proceso...`);
    //Pausamos la ejecución hasta que proceso() se resuelva luego de 3 segundos
    const resultado = await proceso();
    console.log(resultado); //Muestra 'proceso completado' después de la espera
    console.log('Proceso terminado.')
}

//Ejecutamos la función
ejecutarProceso() 



