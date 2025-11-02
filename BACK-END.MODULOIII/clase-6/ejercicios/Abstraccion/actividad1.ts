/*Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real
Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método preparar(). 
Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción para que ambas bebidas oculten su lógica de preparación
interna pero expongan un comportamiento común.*/

interface Bebida{
    preparar() : void;
}

class Cafe implements Bebida {
    preparar(): void {
        console.log(`Preparando el café...`); //El console.log solo nos muestra que se está preparando no el como lo hace 
    }
}

class Te implements Bebida {
    preparar(): void {
        console.log(`Preparando el té...`);
        
    }
}

const cafe = new Cafe();
const te = new Te()

cafe.preparar()
te.preparar()