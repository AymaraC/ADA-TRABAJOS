/*Ejercicio 5: Uso de Interfaces para Polimorfismo
Crea una interfaz Empleado con un método trabajar. Implementa esta interfaz en clases Programador y Disenador, 
donde cada clase debe implementar el método con su propia lógica. Luego, crea una función que reciba un objeto 
de tipo Empleado y llame a su método trabajar.*/

interface Empleado {        //Definimos las ´reglas´
    trabajar() : void;
}

class Programador implements Empleado {
    trabajar(): void {
        console.log(`El programador está trabajando en una aplicación web.`);
    }
}

class Disenador implements Empleado {
    trabajar(): void {
        console.log(`El diseñador trabaja en conjunto al programador.`);
        
    }
}

function hacerTrabajar(empleado: Empleado) {        //Le pasamos como parametro a la interfaz empleado. Entonces la función espera que un objeto tenga el método trabajar() sin importar la clase.
    empleado.trabajar()
}

const diseñador = new Disenador();      // Creamos el objeto a partir de la clase diseñador
const programador = new Programador();

hacerTrabajar(diseñador);       //Recibe al objeto por medio de la función
hacerTrabajar(programador);




