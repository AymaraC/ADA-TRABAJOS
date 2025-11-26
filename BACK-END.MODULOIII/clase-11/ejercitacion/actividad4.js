/*4. Simulación de Proceso de Pago Asíncrono con Manejo de Errores
Diseña una función que simule un proceso de pago que tarda 3 segundos en completarse. Si el monto del pago es superior 
a $1000, el proceso debe fallar y lanzar un error. Utiliza try/catch para manejar el error de manera adecuada.
Esta simulación es relevante para entender cómo gestionar errores en procesos financieros o de pago, en los cuales las 
validaciones son cruciales.*/

function procesoPago(monto) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(monto > 1000){
                reject(`🚫 Rechazado. El monto ingresado $${monto} es superior a $1000`)
                return;
            } else {
                resolve(`✔️  Monto: $${monto} aceptado. Pago procesado.`)
            }
        }, 3000)
    })
}

async function manejarPago() {
    try {
        console.log('Consultando...')
        const mensaje = await procesoPago(1500)
        console.log(mensaje);

    } catch (error){
        console.error(error)
    }
}

manejarPago();


















