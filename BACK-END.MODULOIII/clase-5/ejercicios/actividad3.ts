/*Ejercicio 3: Clases y Objetos
1. Define una clase llamada Animal con propiedades nombre y tipo, y un método hacerSonido().
2. Crea una instancia de la clase Animal y llama al método.*/

class Animal {
    nombre: string;
    tipo: string;
    hacerSonido() : string {
        return `Mi mascota ${this.nombre} que es un ${this.tipo} hace ruidos de noche.`
    }

    constructor(nombre: string, tipo:string){
        this.nombre = nombre;
        this.tipo = tipo;
    }
}

const miAnimal = new Animal('Zoe', 'Golden')
const gato = new Animal('Misu', 'Siames');
console.log(miAnimal.hacerSonido());
console.log(gato.hacerSonido());

