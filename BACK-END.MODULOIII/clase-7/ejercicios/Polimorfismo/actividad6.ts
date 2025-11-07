/*Ejercicio 6: Herencia Múltiple Simulada con Interfaces
Crea dos interfaces, Volador y Nadador, con métodos volar y nadar, respectivamente. Implementa ambas interfaces en 
una clase Pato. Demuestra cómo una clase puede "heredar" múltiples comportamientos usando interfaces*/

interface Volador {
    volar() : void;
}
interface Nadador {
    nadar() : void;
}

class Pato implements Volador, Nadador {
    volar(): void {
        console.log(`🦆 El pato se encuentra volando.`);
    }

    nadar(): void {
        console.log(`🦆 El pato se encuentra nadando.`);
    }
}

const pato = new Pato()
pato.volar()
pato.nadar()







