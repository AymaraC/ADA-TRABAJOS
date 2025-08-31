/*Ejercicio 5: Adivina el Número
Crea un juego en el que el usuario deba adivinar un número aleatorio entre 1 y 10. 
Usa readline-sync para recibir el intento del usuario y proporciona pistas (mayor o menor) hasta que adivine.*/

const readlineSync = require('readline-sync');

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let intento;

while(intento !== numeroAleatorio){

    intento = readlineSync.questionInt('Ingresa un número: ')

    if(intento === numeroAleatorio){
        console.log('🎉¡Felicitaciones acertaste el número!');
        
    } else if (numeroAleatorio < intento){
        console.log('Pista: el número es menor al número ingresado.');
    } else {
        console.log('Pista: el número es mayor al número ingresado.');
        
    }
};











