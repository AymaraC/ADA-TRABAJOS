export
// Declaramos una tupla
let persona: [string, number]; //Se le pone export para que no confunda el nombre con el nombre de otra variable

// Inicializacion de la tupla
persona = ['Ana', 25];
console.log(persona); //Lo vemos en formato tuplas


// Accedemos a los elementos de la tupla
console.log('Nombre: ', persona[0]);
console.log('Edad: ', persona[1]);

// Modificamos la tupla
persona[1] = 26;
console.log('Edad actualizada:', persona[1]);
console.log(persona);

// Desestructurar la tupla
let [nombre, edad] = persona; //Le deciamos que lo divida en dos variables distintas primero en nombre y después edad
console.log(`La persona se llama ${nombre} y tiene ${edad} años.`);


