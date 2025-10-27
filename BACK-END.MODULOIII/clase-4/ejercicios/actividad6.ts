/*Actividad 6: Filtrar elementos de un arreglo genérico usando For...Of y Aserciones
Crea una función genérica llamada filtrarElementos que reciba un arreglo de valores mixtos 
(por ejemplo, number | string | boolean). Usando un bucle for...of, filtra solo los valores que sean cadenas de 
texto (string). Utiliza aserciones de tipo para acceder a las propiedades específicas de string.*/

/*<T> La función puede recibir un array de cualquier tipo. 'arr: T[]' = el parámetro es un array de elementos de tipo T. 
string[] = el retorno será un array de strings filtrados.*/

function filtrarElementos<T>(arr: T[]) : string[] { 
    const result : string[] = []; //Guardamos los elementos que le indicamos, en este caso, los string

    for(let elemento of arr){  //Utilizamos el for.. of para recorrer los valores del array, el elemento puede ser de cualquier tipo(T)
        
        if(typeof elemento === 'string'){   //Verificamos que el elemento sea verdaderamente un string. Necesitamos el if porque el typeof solo devuelve el tipo, no filtra nada por sí solo.
            result.push(elemento as string) //Le decimos explícitamente a TypeScript que es string.
        }
    }
    
    return result;
}

const mixtos : (number | string | boolean)[] = ['Hola', 'mundo', 150, true, 'TypeScript', 10];
const soloString = filtrarElementos(mixtos)

console.log(`Elementos filtrados de tipo string: ${soloString}`); //Devuelve Hola,mundo,TypeScript





