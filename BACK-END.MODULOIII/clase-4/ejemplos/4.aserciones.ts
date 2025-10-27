// Ejemplo 1: Aserción básica de tipo 'any' a 'string'
let valorGenerico : unknown = 'TypeScript es increíble';    //Al poner 'any' infiere que puede ser string por eso no daba error con el .length
//console.log(valorGenerico.length);

let longitudString : number =(valorGenerico as string).length
console.log(`La longitud del string es: ${longitudString}`);

console.log('\n----------------------\n');


// Ejemplo 2: Aserciones con tipo de union
function nombreMayuscula(nombre: string | null) : string{
    if(nombre){
        return (nombre as string).toUpperCase();
    } else {
        return 'Nombre no proporcionado';
    }
}

console.log(nombreMayuscula('Ana'));
console.log(nombreMayuscula(null));
 
console.log('\n----------------------\n');

// Ejemplo 3: Aserciones con 'unknown'
let valorDesconocido : unknown = 'Este es un valor desconocido'
if(typeof valorDesconocido === 'string'){
    let longitud : number = (valorDesconocido as string).length;
    console.log(`La longitud del string desconocido es: ${longitud}`);
};

console.log('\n----------------------\n');

// Ejemplo 4: Aserciones dobles para tipos incompatibles (las que menos se utilizan)
let valor: any = 'Este es un valor';
let valorNumerico = (valor as unknown as number); 
console.log(`Valor numérico con asercion doble: ${valorNumerico}`);

console.log('\n----------------------\n');

// Ejemplo 5: precaución en las aserciones
let valorErroneo : any = 42;
let textoErroneo = valorErroneo as string //Incorrecto pero permitido por el compilador. Cambio el tipo que infiere TypeScript
console.log(textoErroneo); //Devuelve undefined, 'length' no existe en un número





