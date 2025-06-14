/* Si no acierta después de los 3 intentos, muestra el número secreto.
Crea un programa donde la computadora seleccione un número al azar entre 1 y 10.
Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera de los intentos, 
muestra un mensaje de felicitación y detén los intentos restantes.*/
const promptsync = require("prompt-sync")();
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

for (let intento = 1; intento <= 3; intento ++ ){
    let usuario = parseInt (promptsync("Adivine un número del 1 al 10, intento "+ intento + ": "));

    if (usuario === numeroSecreto){
        console.log ("¡Felicitaciones, acertaste!🎉")

    break;
} else {
    if (intento < 3){
        console.log ("No es correcto😞 Intenta de nuevo."); 
}

    if (intento=== 3){
        console.log ("Se terminaron los intentos, el número era: " + numeroSecreto)
        }
    }    
}
    

