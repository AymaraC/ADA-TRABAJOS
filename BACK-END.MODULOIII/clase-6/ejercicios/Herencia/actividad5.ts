/*Ejercicio 5: Herencia con Modificadores de Acceso
Consigna: Crea una clase base Compania con un atributo privado nombreCompania y un atributo protegido ingresosAnuales. 
Crea una clase derivada EmpresaTecnologia que use el atributo protegido y agregue un método que calcule el doble de los 
ingresos anuales.*/

class Compania {
    private nombreCompania : string;
    protected ingresosAnuales: number;

    constructor(nombreCompania: string, ingresosAnuales: number) {
        this.nombreCompania = nombreCompania;
        this.ingresosAnuales = ingresosAnuales;
    }

    mostrarNombre() : void {        //Creamos un método para mostrar el nombre solo si es llamado desde afuera así protegemos la propiedad que es privada.
        console.log(`Nombre de la companía: ${this.nombreCompania}`);
    }
}

class EmpresaTecnologia extends Compania {

    constructor(nombreCompania:string, ingresosAnuales:number) {
        super(nombreCompania,ingresosAnuales)
    }

    calcularElDoble() : number {
        return this.ingresosAnuales * 2;
        
    }

}

const empresa = new EmpresaTecnologia('Skyler',200000);
console.log(`El doble de ingresos anuales es de: $${empresa.calcularElDoble()}`);

