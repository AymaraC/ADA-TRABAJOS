/*Ejercicio 2: Clases Abstractas - Sistema de Vehículos
Crea una clase abstracta Vehiculo con una propiedad velocidad y un método abstracto mover(). Luego, implementa dos clases
concretas: Auto y Bicicleta. Usa los modificadores de acceso para controlar la visibilidad de las propiedades.*/

abstract class Vehiculo {

    constructor(protected velocidad: number){
        this.velocidad = velocidad;
    }

    abstract mover() : void;
}

class Auto extends Vehiculo {
     mover(): void {
         console.log(`El auto se mueve a ${this.velocidad}km por hora`);
         
     }
}

class Bicicleta extends Vehiculo{
    mover(): string {
        return `La bicicleta se mueve a ${this.velocidad}km por hora.`
    }
}

const vehiculos = new Bicicleta(20)
console.log(vehiculos.mover());




