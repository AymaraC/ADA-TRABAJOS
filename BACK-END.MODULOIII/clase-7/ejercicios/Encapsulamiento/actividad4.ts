/*4. Ejercicio de Aviones
Crea una clase Avion con propiedades privadas para el modelo, capacidad y velocidad. Implementa getters y setters para cada propiedad, 
asegurándote de validar que la capacidad no sea menor que 0 y que la velocidad no sea negativa.
Nota sobre la inicialización de propiedades
En la clase Avion, se debe utilizar el operador de afirmación no nula (!) en las propiedades _capacidad y _velocidad. Esto se hace para evitar 
un error de TypeScript que indica que estas propiedades no estaban inicializadas en el constructor. Este enfoque asegura que las propiedades 
serán asignadas adecuadamente en el constructor mediante el uso de los setters, manteniendo así la validación de los valores. 
Tener esto en cuenta para los demás ejercicios.*/

class Avion {
    private _modelo: string;
    private _capacidad!: number;
    private _velocidad! : number;

    constructor(modelo: string, capacidad: number, velocidad: number){
        this._modelo = modelo;
        this.capacidad = capacidad
        this.velocidad = velocidad
    }

    public get modelo() : string {
        return this._modelo
    }

    public get capacidad() : number {
        return this._capacidad
    }

    public get velocidad() : number {
        return this._velocidad
    }

    public set capacidad(pasajeros: number) {
        if(pasajeros < 0) {
            console.log(`❌ ERROR. La cantidad de pasajeros ingresada: ${pasajeros} no es válida, debe ser un valor mayor a 0.`);
        } else {
            this._capacidad = pasajeros
           console.log(`La capacidad es de: ${pasajeros}`);
        }
    }

    public set velocidad(rapidez: number) {
        if(rapidez < 0) {
            console.log(`ERROR: La velocidad debe ser mayor a 0`);
            
        } else {
            this._velocidad = rapidez
            console.log(`Velocidad actual: ${rapidez}`);
            
        }
    }
}

const avion = new Avion('Boeing', -6, -8)
console.log(`El avión '${avion.modelo}' que tiene una capacidad de ${avion.capacidad} pasajeros, vuela a ${avion.velocidad} km/h.`);
avion.capacidad=150
avion.velocidad= 1000
console.log(`El avión '${avion.modelo}' que tiene una capacidad de ${avion.capacidad} pasajeros, vuela a ${avion.velocidad} km/h.`);

