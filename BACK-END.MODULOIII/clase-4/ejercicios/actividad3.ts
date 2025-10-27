/*Actividad 3: Crear una función genérica
Crea una función genérica que tome un parámetro de cualquier tipo y lo devuelva.  Prueba la función con diferentes tipos de datos.*/

function datosVarios<T>(dato: T ): T {
    return dato;
}

let texto = datosVarios<string>('Estamos aprendiendo a usar genericos');
let numero = datosVarios<number>(2009)
let boolean = datosVarios<boolean>(true)

console.log(`Valor tipo string:${texto} \nValor númerico: ${numero} \nValor booleano: ${boolean}`);



