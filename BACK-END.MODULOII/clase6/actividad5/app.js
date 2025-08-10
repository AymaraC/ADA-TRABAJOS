/*Consigna:
Crea un programa interactivo que permita convertir temperaturas de grados Celsius a Fahrenheit.
1. Usa una variable de entorno llamada WELCOME_MESSAGE para mostrar un mensaje inicial. 
Si no se define, usa "¡Bienvenido al conversor de temperaturas!" por defecto.
2. Usa el módulo readline para solicitar al usuario una temperatura en grados Celsius.
3. Calcula la conversión a Fahrenheit usando la fórmula.
4. Muestra el resultado en la consola.
5. Despídete del usuario al final.*/

require('dotenv').config();
const readLine = require('readline');

const mensajeBienvenida = process.env.WELCOME_MESSAGE || '¡Bienvenido al conversor de temperaturas!'
console.log(mensajeBienvenida);

const rl = readLine.createInterface({
    input : process.stdin,      
    output: process.stdout     
});

rl.question('Por favor, ingrese la temperatura en grados Celsius: ',(celsius) =>{
    const fahrenheit = (parseFloat(celsius) * 9) / 5 + 32
    console.log(`La temperatura en Fahrenheit es ${fahrenheit}`);
    rl.close();
})

rl.on('close',()=> {
    console.log('Gracias por utilizar nuestro programa.')
    process.exit(0)
    
})











