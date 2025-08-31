/*Crea un juego de preguntas y respuestas usando readline-sync. 
Define un conjunto de preguntas con sus respuestas correctas y lleva un conteo de las respuestas acertadas.*/

const readlineSync = require('readline-sync');

let aciertos = 0;

const preguntasYRespuestas = [
    {pregunta: '¿En que continente se encuentra Argentina?', respuesta: 'America del Sur'},
    {pregunta: '¿En que año Lionel Messi ganó el mundial?', respuesta: '2022'},
    {pregunta:'¿Cuáles son los colores de la bandera Argentina?', respuesta:'Celeste y blanco'}
]

for(let i = 0; i < preguntasYRespuestas.length; i++){

    const respuestaUsuario = readlineSync.question(preguntasYRespuestas[i].pregunta + ' ').toLowerCase().trim(); //Le mostramos la pregunta al usuario con el .pregunta accedemos a la cada pregunta en cada vuelta.

  if (respuestaUsuario === preguntasYRespuestas[i].respuesta.toLowerCase()) { //Comparamos la respuesta del usuario con la respuesta correcta con el .respuesta
    aciertos++;
    console.log('✅ Correcto!\n');

  } else {
    console.log('❌ Incorrecto!\n');
  }
}

console.log(`Juego terminado🎉 Respuestas correctas: ${aciertos} de ${preguntasYRespuestas.length}. \n ¡Gracias por jugar!`);





























