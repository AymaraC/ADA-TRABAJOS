/*Actividad 5: Usar aserciones dobles
Crea una variable de tipo any y haz una conversión con aserciones dobles para convertirla en un number. 
Muestra el resultado.*/

let valor : any = '123456';
let valorNumero = (valor as unknown as number)

console.log(valorNumero);

//Al ser un string, TS no permite hacer un string as number directamente porque son tipos incompatibles. Entonces se usa 
//el 'unknown' como puente y recién ahí se pasa a number. Pero no cambia el valor de verdad, sigue siendo un string.



