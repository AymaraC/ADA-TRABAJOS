// Intervalo con condición de parada
let contador = 0;

const intervalo = setInterval(() => {
    contador ++
    console.log(`Contador con condición: ${contador}`);

    if(contador === 5){
        clearInterval(intervalo);  //Cancela el intervalo cuando llegue a 5.
        console.log(`El intervalo llegó a su condición.`);
    }

}, 2000);

