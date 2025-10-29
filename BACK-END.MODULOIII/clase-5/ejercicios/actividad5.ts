/*Ejercicio 5: Uso de this
1. Crea una clase llamada Mariposa con propiedades nombre y color, y un método volar() que use this para referirse a
las propiedades de la instancia.
2. Crea una instancia de la clase y llama al método.*/

class Mariposa {
    nombre: string;
    color: string;
    volar() : string {
        return `La mariposa de color ${this.color} que se llama ${this.nombre} está volando.`
    }

    constructor(nombre:string, color: string){
        this.nombre = nombre;
        this.color = color;
    }
}

const miMariposa = new Mariposa('Jazmin','blanca')
console.log(miMariposa.volar());

