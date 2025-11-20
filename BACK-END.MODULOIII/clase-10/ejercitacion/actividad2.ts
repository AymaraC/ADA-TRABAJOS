/*Ejercicio 2: Promesas - Simulador de Envío de Correos Electrónicos. Consigna:
Vas a crear una función llamada enviarCorreo() que simule el envío de un correo electrónico usando una promesa. 
La promesa debe cumplir con los siguientes requisitos:
1. Resolver si el correo fue enviado exitosamente (usa Math.random() para simular éxito o error).
2. Rechazar si ocurre un fallo en el envío.
3. La operación debe tardar 2 segundos en completarse (usa setTimeout()).
4. Implementa .then(), .catch(), y .finally() para manejar la respuesta:
- Si el correo se envía exitosamente, imprime el mensaje: "Correo enviado a [destinatario]".
- Si falla, imprime: "Error: No se pudo enviar el correo a [destinatario]".
- En finally(), muestra siempre el mensaje: "Operación finalizada".
Implementa la función para enviar correos a dos destinatarios distintos.*/

function enviarCorreo(destinatario : string) {

const miPromesa = new Promise((resolve, reject) => {
    console.log(`📨 Enviando correo..`);
    
    setTimeout(() => {
        const simulacion = Math.random() > 0.5       //Simulamos éxito u error.

        if(simulacion){
            resolve (`Correo enviado con éxito a ${destinatario}`)
        } else {
            reject (`No se pudo entregar el correo al destinatario '${destinatario}'.`)
        }
    }, 2000);
})

miPromesa.then((mensaje) => {
    console.log(`✔️  Éxito: ${mensaje}`);
})

miPromesa.catch((mensaje) => {
    console.log(`🚫 Error: ${mensaje}`);
})

miPromesa.finally(() => {
    console.log(`🔒 Operación finalizada.`);
})
}

enviarCorreo('maria@example.com')



















