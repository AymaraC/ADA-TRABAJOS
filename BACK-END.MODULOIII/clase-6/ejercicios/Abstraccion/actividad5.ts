/*Ejercicio 5: Decidir Entre Clases Abstractas e Interfaces Diseña un sistema de transporte público. Define:
• Una interfaz VehiculoElectrico con el método cargarBateria().
• Una clase abstracta Transporte con el método abstracto mover().
Implementa ambas estructuras en una clase concreta AutobusElectrico.*/

interface VehiculoElectrico {
    cargarBateria() : void;
}

abstract class Transporte {
    abstract mover() : void;
}

class AutobusElectrico extends Transporte implements VehiculoElectrico {
    cargarBateria(): void {
        console.log(`El Bus se detuvo a cargar la batería.`);
    }

    mover(): void {
        console.log(`El Autobus se puso en marcha y puede moverse por cinco horas hasta que se agote nuevamente la batería.`);
        
    }
}

const vehiculo = new AutobusElectrico();
vehiculo.cargarBateria()    // Llama al método de la interfaz
vehiculo.mover()            // Llama al método abstracto que definido en la clase