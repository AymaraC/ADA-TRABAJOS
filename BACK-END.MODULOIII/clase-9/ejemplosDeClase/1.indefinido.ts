// Intervalo de forma indefinida (cancelacion manual)
let contador = 0;

const intervalo = setInterval(() => {
    contador ++; // Al que ya tenía le suma uno más.
    console.log(`Contador indefinido: ${contador}`);
    //clearInterval(intervalo) -> se corta
}, 1000); // 1000 milisegundos = 1 segundo

console.log(`Intervalo indefinido inicializando...`);



