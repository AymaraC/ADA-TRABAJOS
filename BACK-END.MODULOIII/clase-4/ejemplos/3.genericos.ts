// Ejemplo de función generica
function identidad<T>(valor: T) : T {
    return valor;
};  //Esta sería la plantilla de nuestra función

// Ejemplos de uso:
let numero = identidad<number>(10); //T va a ser tipo number
let texto = identidad<string>('Hola'); //T va a ser un string
console.log(numero, texto);





