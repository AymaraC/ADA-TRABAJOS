// Interfaz para vehículos electricos
interface Electrico {
    cargarBateria() : void 
}

// Clase abstracta para definir todos los vehículos
abstract class Vehiculo {
    constructor(protected tipo: string){} //Inicializa el vehículo

    abstract moverse() : void;

    describir(): void{
        console.log(`Este es un vehículo de tipo ${this.tipo}`);
    }
}

// Creamos una clase que extienda la clase abstracta e implemente la interfaz
class AutoElectrico extends Vehiculo implements Electrico{
    constructor(){
        super('Auto Electrico');
    }

    moverse(): void {
        console.log(`El auto electrico está en movimiento.`);
        
    }

    cargarBateria(): void {
        console.log(`Cargando la batería del auto...`);
        
    }

}

const tesla = new AutoElectrico();
tesla.describir();
tesla.moverse();
tesla.cargarBateria();





