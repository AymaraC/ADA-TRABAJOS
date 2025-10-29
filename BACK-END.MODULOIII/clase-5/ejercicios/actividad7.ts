/*Ejercicio 7: Integramos contenidos - Animales
1. Crea un pequeño sistema de gestión de Animales que incluya las clases Animal, Mascota, y MascotaExotica.
-La clase Animal debe tener propiedades como nombre y tipo.
-La clase Mascota debe extender Animal e incluir una propiedad para dueño.
-La clase MascotaExotica debe extender Animal e incluir una propiedad para habitat.
2. Implementa métodos para mostrar información sobre cada tipo de animal y agrega ejemplos de instanciación.*/

class Animal {
    nombre: string;
    tipo:string;
    mostrarInformacion() : string {
        return `El animal se llama ${this.nombre} que es un ${this.tipo}`
    }


    constructor(nombre: string, tipo:string){
        this.nombre = nombre;
        this.tipo = tipo;
    }
}

class Mascota extends Animal {
    dueño : string;     //Creamos una nueva propiedad que la agregamos en la clase hija
    
    mostrarInformacion(): string {
        return `${this.dueño} es el dueño de ${this.nombre} que es un ${this.tipo}`
    }

    constructor(nombre:string, tipo:string, dueño:string){
        super(nombre, tipo)
         this.dueño = dueño
    }
    
}

class MascotaExotica extends Animal {
    habitat : string;
    
    mostrarInformacion(): string {
        return `El ${this.tipo} llamado ${this.nombre} vive en ${this.habitat}`
    }

    constructor(nombre:string, tipo:string, habitat:string){
        super(nombre,tipo)
        this.habitat = habitat
    }
}

const animal1 = new Animal('Isabella', 'gato');
const animal2 = new Mascota('Zoe', 'perra', 'Aymara');
const animal3 = new MascotaExotica('Clara', 'chimpance', 'selva');
console.log(animal1.mostrarInformacion());
console.log(animal2.mostrarInformacion());
console.log(animal3.mostrarInformacion());



