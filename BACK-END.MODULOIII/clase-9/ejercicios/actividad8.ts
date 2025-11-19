/*Ejercicio 8: Sistema de Nave Espacial con Gestión de Recursos
Crea un sistema para gestionar una nave espacial en una misión de recolección de recursos en diferentes planetas. 
Define una clase NaveEspacial con atributos como combustible y capacidadDeCarga. Implementa métodos para viajar entre
planetas, recolectar recursos (oxígeno, minerales, agua), y gestionar el combustible. Usa tuplas para representar las 
coordenadas espaciales de los planetas y una interfaz para los tipos de recursos recolectados.*/

type Coordenadas = [number, number]

interface Recursos {
    oxigeno: number;
    minerales: number;
    agua: number;
}

class Planeta {
    constructor(public nombre: string, private _coordenadas: Coordenadas, public recursosDisponibles: Recursos){}

    get coordenadas(){
       return this._coordenadas
    }
}

class NaveEspacial implements Recursos{
    constructor(public oxigeno:number, public minerales: number, public agua: number, public combustible: number, public capacidadDeCarga: number){}

    viajar(planeta: Planeta){
        if(this.combustible < 20){
            console.log(`No podemos viajar a ${planeta}. No hay combustible suficiente.`);
            return;
        }
        console.log(`🛸 Viajando al planeta ${planeta.nombre} en ${planeta.coordenadas}...`);
        this.combustible -= 20; // resta combustible

         console.log(`⛽ Combustible restante: ${this.combustible}`);
    }

    recolectarRecursos(planeta: Planeta){
        console.log(`Recoletactando recursos de ${planeta.nombre}...`);
        
        const totalARecolectar = planeta.recursosDisponibles.agua + planeta.recursosDisponibles.minerales + planeta.recursosDisponibles.oxigeno
        if(totalARecolectar > this.capacidadDeCarga) {
            console.log(`🚫 Excede la capacidad de carga. No se puede recolectar.`);
            return;   
        }

        this.agua += planeta.recursosDisponibles.agua
        this.minerales += planeta.recursosDisponibles.minerales
        this.oxigeno += planeta.recursosDisponibles.oxigeno
        console.log(`✅ Recursos recolectados correctamente.`);
        console.log(`📦 Estado actual: Agua ${this.agua}, Minerales ${this.minerales}, Oxígeno ${this.oxigeno}`);   
    }
}

const planetaMarte = new Planeta("Marte",[20, 40],{ agua: 10, minerales: 30, oxigeno: 5 });
const planetaJupiter = new Planeta('Jupiter', [40,50], {agua: 20, minerales: 80, oxigeno: 15});

const nave = new NaveEspacial(
    0, 0, 0, // recursos iniciales
    100,     // combustible
    100      // capacidad de carga
);

nave.viajar(planetaMarte);
nave.recolectarRecursos(planetaMarte);

nave.viajar(planetaJupiter);
nave.recolectarRecursos(planetaJupiter);










