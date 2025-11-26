// Simulamos una función que solicita datos, con una opción de éxito u error.
function obtenerDatos(exito) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(exito){
                resolve('Datos recibidos correctamente.');  // Resuelve con éxito
            } else {
                reject('Error al obtener los datos.')   // Lanza un error
            }
        }, 3000)
    });
}

// Función asíncrona que intenta obtener los datos y maneja posibles errores.
async function consultarDatos() {
    try {
        console.log('Iniciando consulta de datos...');
        // Pausa hasta que obtenerDatos() se complete o atrapa un error si ocurre
        const resultado = await obtenerDatos(true);  // Cambia a false para que entre en bloque catch
        console.log(resultado); // Imprime se fue exitoso
    } catch(error) {
        console.error('Ocurrió un error', error);   // Captura y muestra el error que viene del reject
    } finally {
        console.log('Finalizando consulta de datos.'); // Siempre se ejecuta
    }
}

consultarDatos();







