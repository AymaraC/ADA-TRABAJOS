/*3. Ejecución de Múltiples Consultas en Paralelo
Simulemos un caso donde un sistema necesita realizar varias consultas a distintos servicios externos de manera simultánea.
Escribe tres funciones que simulen una consulta, cada una con un tiempo de respuesta diferente (1, 2 y 3 segundos). 
Luego, crea una función que ejecute estas tres consultas en paralelo usando Promise.all, de modo que se esperen los tres 
resultados antes de continuar. Esta técnica te permitirá comprender cómo hacer más eficientes las operaciones
asíncronas independientes ejecutándolas en paralelo.*/

function consultarStock() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Consultando stock...');
            resolve('Stock consultado');
        }, 1000);
    });
}

function consultarColorProducto() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Consultando color...');
            resolve('Color consultado');
        }, 2000);
    });
}

function consultarDemoraEnvio() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('El envío demora 2 días.');
            resolve('Demora consultada');
        }, 3000);
    });
}

// Función async para ejecutar las consultas en paralelo
async function consultas() {
    try {
        const resultados = await Promise.all([      // Espera a todas las promesas en paralelo, si las promesas dependen entre sí no se puede utilizar promise.all()
            consultarStock(),
            consultarColorProducto(),
            consultarDemoraEnvio()
        ]);
        console.log('Resultados finales:', resultados);
    } catch (error) {
        console.error(error);
    }
}

consultas();














