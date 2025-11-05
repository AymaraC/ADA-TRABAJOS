/*3. Ejercicio de Estudiante
Diseña una clase Estudiante que contenga propiedades privadas para nombre, edad, y calificaciones. Implementa métodos 
para agregar calificaciones y calcular el promedio. Imprime un mensaje en caso de que se intente agregar una calificación 
inválida (fuera del rango 0-100) o si no hay calificaciones para calcular el promedio.*/

class Estudiante {
    private _nombre : string;
    private _edad : number;
    private _calificaciones: number[]

    constructor(nombre:string, edad: number){
        this._nombre = nombre;
        this._edad = edad;
        this._calificaciones = []
    }

    public agregarCalificaciones(nota: number) : void {
        if(nota < 0 || nota > 100) {
            console.log(`La nota ${nota} no es válida. Debe ser mayor a 0 y menor a 100.`);
            
        } else {
           {this._calificaciones.push(nota)}
            console.log(`Califaciones: ${nota}`)
        }
    }

    public calcularPromedio() : void {
        if(this._calificaciones.length === 0){
            console.log(`No hay calificaciones para promediar.`);
            
        } else {
            const suma = this._calificaciones.reduce((a,b) => a + b, 0)
            console.log(`Promedio: ${suma / this._calificaciones.length}`);
        }
    }

    public get name() : string {        // Utilizamos get para poder leer las propiedades privadas por fuera de la clase.
       return this._nombre
    }

    public get edad() : number {
        return this._edad
    }
   
}

const alumno = new Estudiante('Franco', 28)
console.log(`Nombre del alumno ${alumno.name} y edad ${alumno.edad} años.`);
alumno.agregarCalificaciones(7)
alumno.agregarCalificaciones(5)
alumno.agregarCalificaciones(8)
alumno.calcularPromedio()