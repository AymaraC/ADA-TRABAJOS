/*Ejercicio 4: Promise.race() - Carrera entre Tareas Consigna:
Crea tres promesas que representen tareas con tiempos de ejecución aleatorios. Usa Promise.race() para que el programa 
imprima solo la primera tarea que se complete. Luego:
1. Asegúrate de que se imprime qué tarea ganó la carrera.
2. Controla posibles errores si alguna de las promesas falla.*/

function tareas(nombre: string) {
    const tiempo = Math.random() * 5000; // tiempo aleatorio entre 0 y 5 segundos

    return new Promise((resolve, reject) => {
        console.log(`⌛ Ejecutando ${nombre} (tiempo: ${Math.round(tiempo)} ms)...`);

        setTimeout(() => {
            const simulacionDeExito = Math.random() > 0.5;

            if (simulacionDeExito) {
                resolve(`✔️  ${nombre} finalizada.`);
            } else {
                reject(`❌ ${nombre} falló.`);
            }
        }, tiempo);
    });
}

const tarea1 = tareas('Primer tarea')
const tarea2 = tareas('Segunda tarea');
const tarea3 = tareas('Tercera tarea');

Promise.race([tarea1, tarea2, tarea3])
    .then((resultado) => {
        console.log(`🏁 Tarea ganadora: ${resultado}`);
    })
    .catch((error) => {
        console.error(`🚫 La primera tarea en finalizar falló: ${error}`);
    });

