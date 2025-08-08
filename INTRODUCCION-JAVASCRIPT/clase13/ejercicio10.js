/*Crea una función expresada llamada calcularFactorial que reciba un número 
y devuelva su factorial.*/

const promptSync = require ("prompt-sync")();

let usuario = parseFloat (promptSync("Ingresa un número para calcular su factorial: "));

let calcularFactorial = function (numero){
    
        let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
        
    }
    return factorial;
}
    console.log ("El factorial de " + usuario + " es " + calcularFactorial(usuario))


