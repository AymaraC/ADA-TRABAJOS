/*Ejercicio 4: Herencia de Métodos y Sobrescritura
Consigna: Define una clase base Flor con el método describir(), que imprime un mensaje general sobre la flor. 
Luego, crea dos clases derivadas Rosa y Girasol, cada una sobrescribiendo el método describir() con un mensaje específico.*/

class Flor {
    describir() : string {
        return `Las flores deben regarse todos los días para que crezcan.`
    }
}

class Rosa extends Flor {
    describir(): string {
        return `Las rosas pueden ser de muchos colores pero la más común es la roja.`
    }
}

class Girasol extends Flor {
    describir(): string {
        return `Los girasoles son grandes y amarillos con centro negro.`
    }
}

const flores = new Flor();
const rosa = new Rosa();
const girasol = new Girasol();

console.log(`Descripción general de las flores: ${flores.describir()}`);
console.log(`Descripción de las rosas: ${rosa.describir()}`);
console.log(`Descripción de los girasoles: ${girasol.describir()}`);


