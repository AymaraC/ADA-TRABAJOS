/*Ejercicio 2: Sistema de Reserva de Hotel
Consigna: Crea un sistema para gestionar las reservas de un hotel. Define una clase base Cliente con propiedades privadas 
como nombre, numeroHabitacion, y un método reservar(). Luego, crea dos clases derivadas ClientePremium y ClienteCorporativo 
que sobrescriban el método reservar() para añadir funcionalidades adicionales.
Adicionalmente, crea una interfaz Beneficios con un método accederBeneficios(). Ambas clases derivadas deben implementar 
esta interfaz. En la clase ClientePremium, el cliente podrá acceder al spa y desayuno gratis, y en la clase
ClienteCorporativo, el cliente podrá acceder a salas de reuniones y descuentos.*/

// Interfaz
interface Beneficios {
    accederBeneficios() : void;
}

// clase base Cliente
class Cliente {
    private _nombre: string;
    private _numeroHabitacion: number;

    constructor(nombre:string, numeroHabitacion: number){
        this._nombre = nombre;
        this._numeroHabitacion = numeroHabitacion;
    }

    reservar() : void {
        console.log(`${this._nombre} realizó una reserva.`);
    }

    get nombre() {
        return this._nombre
    }

    get numeroHabitacion() {
        return this._numeroHabitacion
    }
}

// clase derivada ClientePremium
class ClientePremium extends Cliente implements Beneficios {
    constructor(nombre: string, numeroHabitacion: number){
    super(nombre, numeroHabitacion)
    }

    reservar(): void {
        console.log(`El cliente ${this.nombre} reservó la habitación ${this.numeroHabitacion} con vista al mar.`);
    }

    accederBeneficios(): void {
    console.log(`El cliente ${this.nombre} podrá acceder al spa y desayuno gratis`);
    }
}

// clase derivada ClienteCorporativo

class ClienteCorporativo extends Cliente implements Beneficios {
    private _descuento: number;
    constructor(nombre: string, numeroHabitacion: number, descuento: number) {
        super(nombre, numeroHabitacion)
        this._descuento = descuento;
    }

    reservar(): void {
        console.log(`
El cliente ${this.nombre} recibió un ${this._descuento}% de descuento en la reserva de su habitación ${this.numeroHabitacion}
ya que es un cliente Corporativo.`);
        
    }
    
    accederBeneficios(): void {
     console.log(`El cliente podrá acceder a salas de reuniones y descuentos`);
    }
}

const cliente1 = new ClientePremium('Guillermo Francella', 520);
const cliente2 = new ClienteCorporativo('Marcos Galperin', 300, 15);
const cliente3 = new ClienteCorporativo('Mark Zuckerberg', 205, 20);
console.log('Cliente 1:');
cliente1.reservar()
cliente1.accederBeneficios();
console.log('---------------------------');

console.log(`Cliente 2:`);
cliente2.reservar();
cliente2.accederBeneficios();
console.log('---------------------------');

console.log(`Cliente 3:`);
cliente3.reservar();
cliente3.accederBeneficios()


