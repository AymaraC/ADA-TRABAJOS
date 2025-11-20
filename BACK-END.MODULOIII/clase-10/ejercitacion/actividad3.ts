/*Ejercicio 3: Métodos Estáticos - Gestionar múltiples tareas con Promise.all() Consigna:
Simula la consulta a tres APIs diferentes que devuelven información sobre usuarios, productos y ventas. Cada consulta 
debe realizarse usando una función que retorne una promesa. Usa Promise.all() para esperar a que todas las consultas se 
completen y luego:
1. Imprime un mensaje con los resultados si todas las consultas fueron exitosas.
2. Si alguna falla, imprime un mensaje de error.
3. Usa un retraso distinto para cada promesa (por ejemplo, 2, 3 y 4 segundos).
Opcional: Modifica el comportamiento para que si alguna consulta falla, se devuelva el mensaje: "No se pudo completar 
la operación: [API que falló]"*/

function consultar(api: string, tiempo: number) {

    return new Promise((resolve, reject) => {
        console.log(`Consultando API: ${api}`);
        
        setTimeout(() => {
            const simulacion = Math.random() > 0.5
            if(simulacion){
                resolve(`✔️  Éxito: ${api}`)
            } else {
                reject(`'${api}' fue rechazada`)
            }
        }, tiempo)
    })

}

const primerApi = consultar('Usuarios',2000);
const segundaApi = consultar('Productos', 3000);
const tercerApi = consultar('Ventas', 4000);

Promise.all([primerApi, segundaApi, tercerApi])
    .then((mensaje) => {
        console.log(`Resultados: `)
            mensaje.forEach(m => console.log(m));

    })
    .catch((error) => {
        console.error(`🚫 Una de las promesas ${error}`);        
    })















