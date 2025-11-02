/*Ejercicio 1: Herencia Simple
Consigna: Define una clase base Torta que tenga propiedades generales como nombre y tipo, y un método hacerDescripcion() 
que devuelva una descripción general de la torta. Luego, crea una clase derivada TortaDeChocolate que extienda de Torta y 
sobrescriba el método hacerDescripcion() para que devuelva "Soy una torta de chocolate, deliciosa y suave."*/

class Torta {           // Clase base
    nombre: string;
    tipo: string;
    
    constructor(nombre:string, tipo: string){
        this.nombre = nombre;
        this.tipo = tipo;
    }

     hacerDescripcion() : string {          // Método general de la clase base
        return `Soy una torta de ${this.tipo} llamada ${this.nombre}.`
    }
}

class TortaDeChocolate extends Torta {      // Clase derivada (heredada de Torta)
    constructor(nombre: string){
        super(nombre, 'chocolate')      // Llama al constructor de la clase base
    }

    hacerDescripcion(): string {
        return `Soy una torta de chocolate, deliciosa y suave.`;  
    }
}

const miTorta = new TortaDeChocolate('Torta para la tarde')
console.log(`
    -Nombre: ${miTorta.nombre} 
    -Tipo: ${miTorta.tipo}
    -Descripción: ${miTorta.hacerDescripcion()}`)
