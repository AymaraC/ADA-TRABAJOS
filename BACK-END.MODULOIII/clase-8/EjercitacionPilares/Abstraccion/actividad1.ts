/*Ejercicio 1: Comparación Completa - Sistema de Transporte Público 
Diseña un sistema que combine interfaces y clases abstractas para gestionar un  transporte público. 
• Crea una clase abstracta Transporte con un método abstracto mover(). 
• Define dos interfaces: 
-Electrico con el método cargarBateria(). 
-Combustible con el método llenarTanque(). 
• Implementa dos clases: 
-AutobusElectrico: Extiende de Transporte e implementa Electrico. 
-Taxi: Extiende de Transporte e implementa Combustible.*/

// Definimos las interfaces
interface Electrico{
    cargarBateria() : void;
}

interface Combustible {
    llenarTanque() : void;
}

abstract class Transporte {
    constructor(protected pasajeros: number){}

    // Método abstracto que van a heredar las subclases
    abstract mover() : void;

    // Método para describir el transporte que tenemos
    describir() : void {
        console.log(`Este transporte lleva ${this.pasajeros} pasajeros.`);
    }

}
// Definimos la clase AutobusElectrico
class AutobusElectrico extends Transporte implements Electrico {
    mover(): void {
        console.log(`El autobus eléctrico se mueve por la ciudad.`);
    }

    cargarBateria(): void {
        console.log(`Cargando la batería del autobus..`);
    }
}

class Taxi extends Transporte implements Combustible {
    mover(): void {
        console.log(`El taxi se mueve por la ciudad.`);
    }

    llenarTanque(): void {
        console.log(`Llenando el tanque del taxi...`);
    }
}

// Hacemos pruebas instanciando pasajeros
const autobus = new AutobusElectrico(20)
autobus.describir();
autobus.cargarBateria();
autobus.mover()
console.log('-------------------');

const taxi = new Taxi(2);
taxi.describir();
taxi.llenarTanque();
taxi.mover()

