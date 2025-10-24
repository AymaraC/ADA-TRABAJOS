// 1. Alias de tipos primitivos
// Alias para tipos básicos o primitivos(como number, string y boolean)
export type ID = number; //Alias para números (el ID va a representar un número).
type Nombre = string; // Alias para cadenas ('nombre' va a representar un string)
type Activo = boolean; //Alias para booleanos ('Activo' representa un booleano)

// Usos para alias
let usuarioID : ID = 123; // Variable de tipo ID (number)
let nombreUsuario : Nombre = 'Lucia'; // Variable de tipo Nombre ('string')
let cuentaActiva : Activo = true; // Variable de tipo Activo (boolean)

console.log(`Usuario: ${nombreUsuario}, ID: ${usuarioID}, Activo: ${cuentaActiva}`);

console.log('\n------------------\n');

// 2. Alias para Objetos
type Direccion = {
    calle: string;      //Propiedad 'calle' va a ser de tipo string
    cuidad: string;     //Propiedad 'cuidad' también será de tipo string
    codigoPostal: number;   //Propiedad 'codigoPostal' solo será de tipo number
};

// Uso del alias 'Direccion' para crear un objeto con esas propiedades
let miDireccion: Direccion = {
    calle: 'San Martin',
    cuidad: 'Rosario',
    codigoPostal: 2000,
};
console.log(`Vivo en: ${miDireccion.calle}, ${miDireccion.cuidad}, CP:${miDireccion.codigoPostal}`);

console.log('\n------------------\n');

// 3. Alias para uniones de tipos
type Resultado = 'exito' | 'error';
type IDUsuario = string | number;

// Usamos el alias resultado y IDUsuario
let estadoOperacion : Resultado =  'exito' //Solo puede ser exito o error porque le pusimos de tipo el resultado.
let idUsuario1: IDUsuario = 4567;
let idUsuario2: IDUsuario = 'hola';

console.log(`Estado de la operación: ${estadoOperacion}, Usuario 1 ID: ${idUsuario1}, Usuario 2 ID: ${idUsuario2}`);

// 4. Alias en funciones
type OperacionMatematica = (a: number, b:number) => number;

//Implementacion de funciones que siguen  el formato OperacionMatematica
const sumar: OperacionMatematica = (a,b) => a + b; //Funcion que suma dos numeros
const restar: OperacionMatematica = (a, b) => a - b;    //Funcion que resta dos numeros

console.log(`Suma: ${sumar(5,3)}
Resta ${restar(5,3)}`);

console.log('\n------------------\n');

// 5. Alias para arrays
type ListaDeNumeros = number[]; //Aclaramos que tiene que ser array con []
type ListaDeCadenas = string[];

let numeros : ListaDeNumeros = [1,2,4,7,15];
let cadenas: ListaDeCadenas = ['uno', 'dos', 'tres'];

console.log(`Numeros: ${numeros.join(', ')}`);
console.log(`Cadenas: ${cadenas.join(', ')}`);



