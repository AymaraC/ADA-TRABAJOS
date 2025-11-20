/*Ejercicio 5: Promesas Anidadas - Flujo Completo de Registro y Bienvenida. Consigna:
Crea una secuencia de promesas que simulen el flujo de un usuario que se registra en una plataforma y luego recibe un 
mensaje de bienvenida. La secuencia debe ser:
1. Registrar Usuario (promesa que tarda 2 segundos).
2. Enviar Email de Bienvenida (promesa que tarda 1 segundo).
3. Mostrar Mensaje Final al completar ambas tareas.
Si alguna de las promesas falla, debe imprimirse un mensaje de error.*/

function registrarUsuario(nombre: string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.5; // simular error
            if(exito){
                console.log(`✔️  Usuario '${nombre}' registrado correctamente.`);
                resolve(`Registro OK`);
            } else {
                reject(`❌ Error registrando al usuario.`);
            }
        }, 2000);
    });
}

function enviarMail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ok = Math.random() > 0.2;
            if(ok){
                console.log(`📤 Correo enviado correctamente.`);
                resolve(`Mail OK`);
            } else {
                reject(`❌ Error enviando correo.`);
            }
        }, 1000);
    });
}

registrarUsuario('Marianela')
    .then(() => {
        return enviarMail(); 
    })
    .then(() => {
        console.log(`🎉 Todo completado correctamente.`);
    })
    .catch((error) => {
        console.log(`🚫 ERROR: ${error}`);
    })
    .finally(() => {
        console.log(`🔒 Proceso finalizado.`);
    });


