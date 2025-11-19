// En este caso utilizamos clearTimeout()
console.log('Ejemplo con cancelacion:');


let temporizador = setTimeout(() => {
    console.log(`Este mensaje no se va a mostrar porque se cancela antes.`);
    
}, 3000)

clearTimeout(temporizador) // Si ponemos este, no nos va a mostrar el mensaje porque lo lee antes de que pasen los 3 segundos.
