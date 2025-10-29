/*Ejercicio 6: Modificadores de Acceso
1. Define una clase Coche con propiedades marca, modelo (públicas) y precio (privada).
2. Implementa un método para mostrar la información del coche que acceda a las propiedades públicas y no a la privada directamente.*/

class Coche{
    public marca: string;
    public modelo: string;
    private precio: number;
    mostrarInformacion() : string {
        return `El auto ${this.modelo} de marca ${this.marca} cuesta ${this.precio}`
    }

    public mostrarPrecio() : void {
        console.log(`El auto ${this.modelo} cuesta ${this.precio}`); //Para que el precio pueda ser visto por fuera de la clase
    }

    constructor(marca:string, modelo:string, precio:number){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio
    }
}

const cocheParaComprar = new Coche('Toyota', 'Etios', 8000)
console.log(cocheParaComprar.mostrarInformacion());


