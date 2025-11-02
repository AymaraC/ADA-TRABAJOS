/*Ejercicio 3: Herencia Múltiple Indirecta (vía Interfaces)
Consigna: Crea dos interfaces: Volador con el método volar() y Transportable con el método transportar(). 
Luego crea una clase Avion que implemente ambas interfaces y sobrescriba los métodos.*/

interface Volador {     // Defino los dos contratos, este permite que cualquier clase que los implemente este obligado a definir estos métodos.
    volar() : void;
}

interface Transportable {
    transportar() : void;
}

class Avion implements Volador, Transportable {
    volar(): void {
        console.log(`El avión está volando.`);
    }

    transportar(): void {
        console.log(`El avión está transportando autos.`);
    }
}

const aviones = new Avion()
aviones.volar()
aviones.transportar()
