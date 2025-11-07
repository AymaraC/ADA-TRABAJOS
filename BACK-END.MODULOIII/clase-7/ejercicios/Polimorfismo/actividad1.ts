/*Ejercicio 1: Polimorfismo con Sobrecarga de Funciones (Tiempo de Compilación)
Implementa una clase Calculadora que tenga un método sumar. El método debe estar sobrecargado para permitir la suma de:
• Dos números enteros.
• Tres números enteros.
• Dos cadenas, concatenando las dos cadenas.*/

class Calculadora {
    sumar(a : number, b: number) : number;
    sumar(a: number, b:number, c: number) : number;
    sumar(a: string, b:string) : string;

  sumar(a : any, b: any, c? : any) : any {      //Utilizamos any para que pueda aceptar tanto números como strings. Es la implementación real del método.
    
    if(typeof a === 'number' && typeof b === 'number' && typeof c === 'number'){
        return a + b + c;
    
    } else if (typeof a === 'number' && typeof b === 'number') {    //Sino hay tercer número, solo suma dos y lo devuelve
        return a + b;
    
    } else if (typeof a === 'string' && typeof b === 'string'){     //Si los dos primeros son strings, concatena
        return a + b;
    
    } else {
        return `🚫 Parámetros ingresados inválidos.`
    }

  }

}

const cuenta = new Calculadora()
console.log(`La suma de los números ingresados es: ${cuenta.sumar(10,10,10)}`);
console.log(`La suma de los dos números es: ${cuenta.sumar(2,2)}`);
console.log(`String anidados: ${cuenta.sumar("Aprendiendo la ", "programación orientada a objetos")}`);








