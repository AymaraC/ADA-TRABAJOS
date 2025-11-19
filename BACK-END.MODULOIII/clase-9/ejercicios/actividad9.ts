/*Ejercicio 9: Implementación de Pac-Man con Herencia y Polimorfismo
Crea un sistema que represente el juego Pac-Man utilizando clases. Define una clase Personaje que sirva como clase base 
para PacMan y Fantasma. Implementa métodos para moverse por el mapa y realizar acciones. Define una interfaz
EntidadMovible que contenga el método moverse. Usa herencia para que PacMan y los fantasmas compartan el comportamiento 
de moverse y polimorfismo para que cada personaje pueda implementar su propio comportamiento de movimiento.*/

interface EntidadMovible {
    moverse(): void;
}

class Personaje {
    constructor(public pacman: string, public fantasma: string){}
}

class Mapa extends Personaje implements EntidadMovible {
    pacmanVidas = 3;
    puntos = 0;
    moverse(): void {
        console.log(`Pacman se mueve a una nueva posición.`);
    }

    comer(tipo: "pellet" | "power-up" = "pellet") {
        if(tipo === "pellet") {
            this.puntos += 10;
            console.log(`Pacman comió un pellet! Puntos totales: ${this.puntos}`);
        } else {
            console.log("Pacman comió un power-up! Ahora puede comer fantasmas");
        }
    }

    recibirDaño() {
        this.pacmanVidas -= 1;
        console.log(`Pacman perdió una vida! Vidas restantes: ${this.pacmanVidas}`);
    }

}

const juego = new Mapa('Pacman', 'Blinky');
juego.moverse();
juego.comer();
juego.comer("power-up");
juego.recibirDaño();
















