// Función asíncrona básica 'saludo' que devolverá un mensaje
async function saludo() {
    // El string 'Hola' será automaticamente envuelto en una promesa
    return `¡Hola!`;
}

// Llamamos a la función y manejamos la promesa resultante con .then()
// Si 'saludo' se resuelve, imprime el mensaje en la consola
saludo().then((mensaje) => {
    console.log(mensaje) // Salida esperada: '¡Hola!'
})






