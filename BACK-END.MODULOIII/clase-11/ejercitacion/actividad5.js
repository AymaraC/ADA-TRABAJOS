/*5. Actualización Concurrente de Datos de Usuario y Pedidos
En un sistema de e-commerce, las actualizaciones de datos de usuario y pedidos suelen ejecutarse de manera concurrente 
para mayor eficiencia. Escribe dos funciones asíncronas, una que actualice los datos del usuario y otra que
actualice los pedidos, ambas con un tiempo de espera de 1.5 segundos. Usa Promise.all para ejecutar ambas funciones en 
paralelo y luego muestra un mensaje cuando ambas actualizaciones se hayan completado.*/

async function baseDeDatos() {
    try{
        console.log('Consultando...');
        const resultados = await Promise.all([actualizarDatos('Aymara'), actualizarPedidos()]) //Incia ambas funciones en paralelo.
        console.log('✅ Todas las actualizaciones completadas:');
        resultados.forEach(res => console.log(res));        //Para que el output no sea en forma de array
    } catch(error) {
        console.error(error)
    }
}

function actualizarDatos(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(nombre){
                resolve(`✔️  ${nombre} actualizado correctamente.`)
            } else {
                reject('🚫 No hay ningun dato para actualizar.')
            }
        }, 1500)
    })
}

function actualizarPedidos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Pedido actualizado.`)
        }, 1500)
    })
}

baseDeDatos();





















