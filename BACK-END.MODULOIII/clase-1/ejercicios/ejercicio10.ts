/*Ejercicio 10: Uso de objetos
Declara un objeto en TypeScript con propiedades de tipo string, number y boolean. 
Accede a estas propiedades e imprímelas en la consola.*/

let persona : { nombre: string; edad: number; esEstudiante: boolean } = {   //En este línea tipeamos exactamente a TypeScript
    nombre: 'Aymara',
    edad : 27,
    esEstudiante: true,
}

console.log(`Mi nombre es ${persona.nombre}.`);
console.log(`Tengo ${persona.edad} años.`);
console.log(persona.esEstudiante ? '📖 Estoy estudiando en este momento.' : 'No estoy estudiando.');








