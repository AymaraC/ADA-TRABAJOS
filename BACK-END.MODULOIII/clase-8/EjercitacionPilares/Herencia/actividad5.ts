/*Ejercicio 5: Sistema de Gestión de Vehículos
Consigna: Crea una clase base Vehiculo con propiedades como marca, modelo, y un método detallesVehiculo(). Luego, crea dos clases derivadas: 
Automovil y Moto, cada una con propiedades adicionales y sobrescribiendo el método detallesVehiculo(). Crea también una interfaz Mantenimiento 
que tenga el método calcularCostoMantenimiento(). Ambas clases derivadas deben implementar esta interfaz, pero con lógicas distintas para 
calcular el costo del mantenimiento.*/

// Interfaz
interface Mantenimiento{
    calcularCostoMantenimiento() : void;
}

class Vehiculo{
    marca: string;
    modelo: string;
    constructor(marca:string,modelo:string){
        this.modelo = modelo;
        this.marca = marca;
    }
    detallesVehiculo() {}
}

class Automovil extends Vehiculo implements Mantenimiento {
    nafta : number;
    seguro: number;
    patente: number;

    constructor(marca:string, modelo:string, nafta:number, seguro: number, patente: number){
        super(marca, modelo)
        this.nafta = nafta;
        this.seguro = seguro;
        this.patente = patente;
    }

    detallesVehiculo(): void {
        console.log(`✅ El coche modelo: ${this.modelo} perteneciente a la marca ${this.marca} se encuentra disponible.`);
    }
    
    calcularCostoMantenimiento(): void {
        const mantenimiento = this.nafta + this.seguro + this.patente
        console.log(`🏍️  El total del mantenimiento del auto para un mes con la nafta, el seguro y la patente incluida es: $${mantenimiento}.`);
    }
}

class Moto extends Vehiculo implements Mantenimiento {
    cuota: number;
    nafta: number;
    seguro: number;
    constructor(marca:string, modelo:string, cuota: number, nafta: number, seguro: number){ 
        super(marca, modelo)      
        this.cuota = cuota;
        this.nafta = nafta;
        this.seguro = seguro;
    }

    detallesVehiculo(): void {
        console.log(`El cliente que compró ${this.modelo} de la marca ${this.marca} le quedan a abonar dos cuotas de $${this.cuota}.`);
    }

    calcularCostoMantenimiento(): void {
        const mantener = this.cuota + this.nafta + this.seguro
        console.log(`El mantenimiento de la motocicleta por mes es de $${mantener}.`);
    }
}

const auto = new Automovil('Toyota', 'Etios', 20000, 10000, 5000);
const moto = new Moto('Bajaj', 'Rouser', 25000, 10000, 50)
console.log('🚗 Información Automovil:');
auto.detallesVehiculo();
auto.calcularCostoMantenimiento();
console.log('------------------------');
console.log('🏍️  Inforamción Motocicleta:');
moto.detallesVehiculo();
moto.calcularCostoMantenimiento();











