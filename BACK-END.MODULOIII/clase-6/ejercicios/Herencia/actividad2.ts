/*Ejercicio 2: Herencia Simple con Acceso
Consigna: Crea una clase base Maestro con propiedades protegidas nombre y materia, y un método enseñar(). 
Luego, crea una clase derivada MaestroMatematicas que extienda de Maestro y sobrescriba el método enseñar() para imprimir 
un mensaje específico de matemáticas.*/

class Maestro {
    protected nombre: string;
    protected materia: string;

    constructor(nombre:string, materia:string){
        this.nombre = nombre;
        this.materia = materia;
    }

    enseñar() : void {
        console.log(`El profesor ${this.nombre} está enseñando ${this.materia}.`);
    }
}

class MaestroMatematicas extends Maestro {

    constructor(nombre: string){
        super(nombre, 'matematicas')
    }

    enseñar(): string {         //Al utilizar protected puedo acceder a las propiedades dentro de la clase hija pero no puedo instanciar las propiedades.
        return `El profesor ${this.nombre} de ${this.materia} hoy nos enseñó sobre ecuaciones.`
    }
}

const matematicas = new MaestroMatematicas('Alberto')
console.log(`${matematicas.enseñar()}`);
