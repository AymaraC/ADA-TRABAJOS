/*5. Ejercicio de Vacaciones
Desarrolla una clase Vacacion que tenga propiedades privadas para destino, duracion (en días) y presupuesto. 
Implementa getters y setters, asegurándote de que duracion no sea menor que 1 y presupuesto sea mayor que 0.*/

class Vacacion {
    private _destino : string;
    private _duracion!: number; //Utilizamos el ! para asignarle el valor luego.
    private _presupuesto!: number;

    constructor(destino: string, duracion: number, presupuesto: number){
        this._destino = destino;
        this.duracion = duracion;       //  Usamos el setter que tiene la validación 
        this.presupuesto = presupuesto; // Usamos el setter que tiene la validación
    }

    public get destino() : string {           //Para que podamos ver desde afuera el destino de las vacaciones.
        return this._destino
    }

    public get duracion() : number {
        return this._duracion
    }

    public get presupuesto(): number {
        return this._presupuesto
    }

    public set duracion(dias: number){
        if(dias < 1){
            console.log(`🚫 Incorrecto. Debe elegir más de un día.`);
            
        } else {
            this._duracion = dias      
        }
    }

    public set presupuesto(value:number)  {
        if(value <= 0){
            console.log(`🚫 Valor incorrecto.`);

        } else {
            this._presupuesto = value
        }
    }

}

const vacaciones = new Vacacion('Jamaica', 10, 5000);
console.log(
    `Eligió: ${vacaciones.destino} con una duración de ${vacaciones.duracion} días y un presupuesto de $${vacaciones.presupuesto}.\nBuscando un paquete...⏳`);
