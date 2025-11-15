/*2. Ejercicio de Empleado
Crea una clase Empleado que contenga propiedades privadas para nombre, salario, y departamento. Implementa métodos para 
cambiar el salario (que no puede ser menor a 0) y obtener la información del empleado. Si se intenta establecer un 
salario negativo, imprime un mensaje indicativo.*/

import { E } from "../../../clase-3/ejercicios/actividad4/constants";

class Empleado {
    private _nombre: string;
    private _salario: number;
    private _departamento: string;

    constructor(nombre:string, salario: number, departamento: string){
        this._nombre = nombre;
        this._departamento = departamento;

        if(salario < 0) {
            console.log(`❌ ERROR. El valor ingresado $${salario} no es válido.`);
        this._salario = 0;  //Valor asignado por defecto ya que no tiene ningún valor anterior.
        } else {
            this._salario = salario;
        }
    }

    get informacionEmpleado(){
        return `ℹ️  Información empleado:\n-Nombre: ${this._nombre}\n-Salario: $${this._salario}\n-Departamento: ${this._departamento}.`
    }

    actualizarSalario(nuevoSalario: number) {

        if (nuevoSalario < 0) {
            console.log(`❌ ERROR. El valor ingresado $${nuevoSalario} no es válido.`);
        } else {
            this._salario = nuevoSalario;   // Asignamos el nuevo valor.
            console.log(`✅ Sueldo actualizado correctamente.`);
        }
    }

}   

const empleado = new Empleado('Gastón', 1500, 'CX');
console.log(empleado.informacionEmpleado);
console.log('------Actualizamos sueldo------');
empleado.actualizarSalario(2000)
console.log(empleado.informacionEmpleado);


