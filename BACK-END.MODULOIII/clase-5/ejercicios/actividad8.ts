/*Ejercicio 8: Sistema de Gestión de Vehículos
1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases:
-Vehiculo: Clase base con propiedades como marca, modelo y un método para mostrar información del vehículo.
-Coche: Clase que extiende Vehiculo e incluye una propiedad para tipoCombustible y un método para mostrar la información completa del coche.
-Motocicleta: Clase que extiende Vehiculo e incluye una propiedad para cilindrada y un método para mostrar la información completa de la motocicleta.*/

class Vehiculo {
    marca:string;
    modelo:string;
    mostrarInformacion() : string {
        return `El ${this.modelo} de la marca ${this.marca} se encuentra a la venta.`
    }

    constructor(marca:string, modelo:string){
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Coche extends Vehiculo {
    tipoCombustible : string;
    
    constructor(marca:string, modelo:string, tipoCombustible:string){
        super(marca,modelo)
        this.tipoCombustible = tipoCombustible;
    }

    mostrarInformacion(): string {
        return `🚗 Información sobre el automovil: 
        -Marca: ${this.marca}
        -Modelo: ${this.modelo}
        -Tipo de combustible: ${this.tipoCombustible}`
    }
}

class Motocicleta extends Vehiculo {
    cilindrada : number;

    constructor(marca:string, modelo:string, cilindrada: number){
        super(marca, modelo)
        this.cilindrada = cilindrada;
    }

    mostrarInformacion(): string {
        return `🏍️  La motocicleta ${this.modelo} de marca ${this.marca} tiene una cilindrada de ${this.cilindrada}`
    }
}

const coche = new Vehiculo('Toyota', 'Yaris');
const coche1 = new Coche('Toyota', 'Yaris', 'nafta');
const moto = new Motocicleta('Bajaj', 'Rouser', 200);
console.log(coche.mostrarInformacion());
console.log(coche1.mostrarInformacion());
console.log(moto.mostrarInformacion());










