import {add, subtract, capitalize, reverse, createUser} from '../utils/index'

console.log(`Suma: ${add(150, 100)}`);
console.log(`Resta: ${subtract(100, 50)}`);
console.log(`String con mayuscula: ${capitalize('estamos exportando en TypeScript')}`);
console.log(`String al revés: ${reverse('estamos exportando en TypeScript')}`);

const persona = createUser('Alex', 30);
console.log(`El usuario '${persona.name}' tiene ${persona.age} años`);


