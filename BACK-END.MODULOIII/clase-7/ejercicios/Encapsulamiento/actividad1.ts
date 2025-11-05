/*1. Ejercicio de Coche
Diseña una clase Coche que represente un vehículo. Esta clase debe tener propiedades privadas para marca, modelo, año, y 
kilometraje. Implementa métodos para encender el coche y realizar un viaje, que incrementen el kilometraje. 
Asegúrate de que el año no sea menor que 1886 (el año en que se inventó el coche) y que el kilometraje no pueda ser 
negativo. Si se intenta establecer un año o kilometraje no válido, imprime un mensaje indicando el error.*/

 class Coche {
    private marca : string;
    private modelo : string;
    private year : number;
    private _km : number;

    constructor(marca:string, modelo:string, year:number, km:number){
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this._km = km;
    }

    public get anio() : number{
        return this.year
    }

    public set anio(value:number) {
        if(value < 1886) {
            console.log(`Error, ingresaste ${value} no puede ser menor a 1886`);
            
        } else {
            this.year = value
        }
    }

    public get km() : number{
        return this._km
    }
    
    public set km(value:number){
        if(value < 0) {
            console.log(`Error el numero ${value} es menor a 0`);
            
        } else {
            this._km = value
        }
    }

    encender() : void {
        console.log(`El coche ${this.marca} de modelo ${this.modelo} está encendido.`);
        
    }

    viajar(distancia: number) : void{
        if(distancia <= 0) {
            console.log(`Error ${distancia} la distancia no puede tener un valor menor a 0.`);
            
        } else {
            this._km += distancia 
            console.log(`Se recorrieron ${distancia}, en total ${this._km} kilometros.`);
            
        }
    }
}

const miCoche = new Coche('Toyota', 'Etios', 2018, 90000)
miCoche.encender();
miCoche.viajar(100);
miCoche.anio = 1800 
miCoche.km = -10
miCoche.viajar(-100)


