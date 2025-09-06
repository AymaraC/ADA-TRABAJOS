/*Consigna:
Este ejercicio te permitirá explorar algunos métodos adicionales del módulo readline, como rl.setPrompt() y 
el evento 'line'. Escribe un programa interactivo que solicite varias palabras al usuario y las muestre en mayúsculas.
El programa finalizará cuando el usuario escriba "salir".
1. Usa rl.setPrompt() para personalizar el mensaje que se muestra al usuario.
2. Usa el evento 'line' para procesar cada palabra que el usuario ingrese.
3. Si el usuario escribe "salir", el programa debe despedirse y finalizar.*/

const readLine = require('readline')

const rl = readLine.createInterface({
    input : process.stdin,      
    output: process.stdout     
});

rl.setPrompt('¡Hola! Vamos a transformar las palabras que ingreses a mayúsculas. Si quieres salir debes escribir "salir". Por favor ingresa una palabra: ');
rl.prompt();

rl.on('line',(input) =>{         //Al usar line pregunta varias veces a diferencia del rl.question que es solo una vez.
    if(input === 'salir'){
        console.log('Gracias por utilizar nuestro programa.');
        rl.close()
    
    } else {
       console.log('Tu palabra transformada:',input.toUpperCase())
       rl.setPrompt('Escriba otra palabra: ')
       rl.prompt()
    }
});

rl.on('close', () => {
    console.log(`Hasta luego, ¡Nos vemos la próxima!`);
    process.exit(0)
});




















