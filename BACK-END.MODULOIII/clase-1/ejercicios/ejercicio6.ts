/*Ejercicio 6: Uso de unknown
Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta variable, y utiliza el operador typeof 
para verificar el tipo antes de imprimir los valores.*/

let unknownValue : unknown = '';

if(typeof unknownValue === 'string'){
    console.log(unknownValue.toLowerCase());
    
} else if(typeof unknownValue === 'number'){
    console.log(`La suma de ${unknownValue} + 20 es de:`, unknownValue + 20);
    
} else if(typeof unknownValue === 'boolean'){
    console.log(`Es un booleano: ${unknownValue}`);
} else {
    console.log('El valor se encuentra vacío');
    
}

