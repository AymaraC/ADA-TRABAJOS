/*Promise.resolve([iterable]) COPIAR DEFINICION*/
const valorNumerico = 10;

const miNuevaPromesa = Promise.resolve(valorNumerico);
miNuevaPromesa
    .then((resultado) => {
        console.log('Valor de promesa: ', resultado);
    })

