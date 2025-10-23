/*Ejercicio 3: Creación y manipulación de objetos
Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre (string), deporte (string), y energia (number). 
Luego, define una función entrenar que acepte el objeto deportista y un número de horas de entrenamiento, 
disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. 
Al final, muestra el estado del deportista en la consola.*/

const deportista : {nombre: string, deporte: string, energia: number} = {
    nombre: 'Diego',
    deporte: 'Natación',
    energia: 90,
};
console.log(`Nombre: ${deportista.nombre}
Deporte: ${deportista.deporte}
Energía antes de entrenar: ${deportista.energia}`);


function entrenar(deportista: {nombre: string, deporte: string, energia: number}, horas: number) {
    deportista.energia = deportista.energia - (5 * horas);
    console.log('\n------------\n');
    
    console.log(`${deportista.nombre} entrenó ${horas} horas en ${deportista.deporte} y ahora tiene ${deportista.energia} de energía.`);
};

entrenar(deportista,3)
