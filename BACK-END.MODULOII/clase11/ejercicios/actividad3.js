/*Ejercicio 3: Calculadora Simple
Crea un script en Node.js que utilice readline-sync para solicitar al usuario dos números y una operación (suma, resta,
multiplicación o división). Luego, muestra el resultado de la operación seleccionada.*/

const readlineSync = require('readline-sync');

const numero1 = readlineSync.questionFloat('Ingrese el primer numero: ');
const numero2 = readlineSync.questionFloat('Ingrese el segundo numero: ');

const operacion = readlineSync.question('Elige la operacion: suma-resta-divison-multiplicacion \n')

switch(operacion){
    case 'suma':
        console.log(`El resultado de la suma es: ${numero1 + numero2}`);
        break;
    case 'resta':
        console.log(`El resultado de la resta es: ${numero1 - numero2}`);
        break;
    case 'division':
        console.log(`El resultado de la división es: ${numero1 / numero2}`);
        break;
    case 'multiplicacion':
        console.log(`El resultado de la multiplicación es: ${numero1 * numero2}`);
        break;
    default:
        console.log('Operación no válida.');
        
}




















