/*9. Ejecución Condicional en Base a Resultados de Promesas
Imagina que necesitas ejecutar una tarea sólo si otra ha sido exitosa. Crea una función tarea1 que simule la realización 
de una tarea en 2 segundos. Luego, escribe otra función tarea2 que dependa de la finalización exitosa de tarea1. Si
tarea1 se completa, tarea2 debe ejecutarse; de lo contrario, no debe ejecutarse nada.
Este ejercicio muestra cómo encadenar tareas y ejecutar una tarea condicionalmente en función del resultado de una promesa.*/

function tarea1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`success`)
        }, 2000)
    })
}

function tarea2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Tarea 1 completada.`)
        }, 1000)
    })
}

async function ejecutarFunciones() {
    const resultado = await tarea1();
    console.log(resultado);
    
    if(resultado === 'success') {
        const res2 = await tarea2();
        console.log(res2);
    }
}

ejecutarFunciones();





