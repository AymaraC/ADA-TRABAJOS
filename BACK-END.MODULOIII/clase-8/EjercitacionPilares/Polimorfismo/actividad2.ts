/*Ejercicio 2: Polimorfismo y Herencia con Abstracción Compleja
Implementa una clase abstracta Empleado con un método abstracto calcularSalario. Crea dos clases derivadas 
EmpleadoPorHora y EmpleadoFijo, que calculen el salario de acuerdo a las horas trabajadas y salario fijo
respectivamente.*/

abstract class Empleado {
    nombre: string;
    salario: number;
    constructor(nombre: string, salario: number){
        this.nombre = nombre;
        this.salario = salario;
    }

    abstract calcularSalario() : void;
}

class EmpleadoPorHora extends Empleado {
    horas: number;
    valorHora: number;
    constructor(nombre:string, salario: number, horas: number, valorHora: number){
        super(nombre,0) //Omitimos el salario para no tener que poner 0 cada vez que instanciamos
        this.horas = horas;
        this.valorHora = valorHora;
    }
    
    calcularSalario(): void {
        const horasTrabajadasPorMes = this.horas * 22;
        this.salario = horasTrabajadasPorMes * this.valorHora
        console.log(`El empleado ${this.nombre} cobra por hora $${this.valorHora}. Este mes cobró un total de $${this.salario}.`);
    }
}

class EmpleadoFijo extends Empleado {
    calcularSalario(): void {
        this.salario = 8000;
        console.log(`El empleado ${this.nombre} cobra un fijo de ${this.salario}.`);
    }
}

console.log('--Empleado Medio Tiempo--');
const empleado1 = new EmpleadoPorHora('Anabella', 0, 5, 200);
empleado1.calcularSalario()

console.log('--Empleado Tiempo Completo--');
const empleado2 = new EmpleadoFijo('Jazmin', 800);
empleado2.calcularSalario()















