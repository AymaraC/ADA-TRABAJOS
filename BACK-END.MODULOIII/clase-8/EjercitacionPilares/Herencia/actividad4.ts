/*Ejercicio 4: Sistema de Gestión de Empleados
Consigna: Crea una clase base Empleado con propiedades protegidas nombre y salario, y un método calcularSalario(). Crea dos clases derivadas
EmpleadoTiempoCompleto y EmpleadoMedioTiempo. Ambas clases deben sobrescribir el método calcularSalario() con sus propias lógicas (empleados de
tiempo completo tienen un salario fijo, mientras que los empleados de medio tiempo cobran por hora).
Además, crea una interfaz BeneficiosLaborales que tenga el método calcularBeneficios(). Solo los empleados de tiempo completo implementarán
esta interfaz.*/

// Interfaz

interface BeneficiosLaborales{
    calcularBeneficios(): void;
}

// Clase base Empleado
class Empleado {
    constructor(private _nombre: string, private _salario: number){}

    calcularSalario() : void {};

    get nombre() {
        return this._nombre
    }

    get salario() {
        return this._salario
    }

    set salario(value: number){
        if(value < 0){
            console.log(`❌ ERROR: el monto ${value} debe ser mayor o igual a 0`);
        } else {
            this._salario = value;
        }
    }
}


// Clase derivada EmpleadoTiempoCompleto
class EmpleadoTiempoCompleto extends Empleado implements BeneficiosLaborales {
    calcularSalario(): void {
        console.log(`Empleado: ${this.nombre} cobra un salario fijo de $${this.salario} ya que trabaja tiempo completo.`);
    }
    
    calcularBeneficios(): void {
        console.log(`Los empleados full time pueden acceder a descuentos en gimnasios.`);
    }
}

class EmpleadoMedioTiempo extends Empleado {
    private _horasTrabajadas: number
    private _valorHora: number

    constructor(nombre:string, salario: number, horasTrabajadas: number, valorHora: number){
        super(nombre, salario)
        this._horasTrabajadas = horasTrabajadas
        this._valorHora = valorHora
    }

    calcularSalario(): void {
        const horasTrabajadasPorMes = this._horasTrabajadas * 22 //Saco las horas trabajadas por 22 días hábiles
        this.salario = horasTrabajadasPorMes * this._valorHora
        console.log(`El empleado ${this.nombre} cobra por hora $${this._valorHora}. En un mes trabajó ${this._horasTrabajadas}hs por lo que cobró $${this.salario}.`);
        
    }
}

console.log('Empleado Tiempo Completo:');
const empleadoFull = new EmpleadoTiempoCompleto('Laura', 800000);
empleadoFull.calcularSalario();
empleadoFull.calcularBeneficios();
console.log('-------------------------------');
console.log(`Empleado Medio Tiempo:`);
const empleadoPart = new EmpleadoMedioTiempo('Sofía', 0, 4, 2500);
empleadoPart.calcularSalario();


















