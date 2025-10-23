// 1. Declaramos un array simple
let frutas: string[] = ['manzana', 'banana', 'pera']; //También se puede declarar Array<string> en vez de string[]
//Utilizamos diferentes métodos
//Agregamos una fruta al final
frutas.push('naranja');
console.log(`Agregamos una fruta al final ${frutas}`);

//Eliminamos la última fruta
let ultimaFruta = frutas.pop();
console.log(`Eliminamos la última fruta: ${ultimaFruta}`);

//Combinamos todos los elementos del array en una cadena
let stringDeFrutas = frutas.join(' - ')
console.log(`Combinamos todos los elementos del array en una cadena:
${stringDeFrutas}`);

