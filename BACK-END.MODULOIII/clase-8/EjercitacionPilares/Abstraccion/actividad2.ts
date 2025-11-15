/*Ejercicio 2: Sistema de Gestión de Cursos
Crea un sistema que gestione cursos, profesores y estudiantes. Usa una clase abstracta Persona, clases concretas Estudiante y Profesor, y 
una clase Curso que contenga los estudiantes y el profesor.*/

// clase abstracta Persona
abstract class Persona {
    nombre: string;
    edad: number;
   
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    abstract presentarse(): void;
}
// clase Estudiante 
class Estudiante extends Persona {
    constructor(nombre:string, edad: number, public curso:string){
        super(nombre,edad)
    }
    
    presentarse(): void {
        console.log(`🤓 Mi nombre es ${this.nombre}, tengo ${this.edad} años y estoy en el curso ${this.curso}.`);
    }
}

// clase Profesor
class Profesor extends Persona {
    constructor(nombre:string, edad:number, public materia:string){
        super(nombre,edad)
    }
    presentarse(): void {
        console.log(`👨‍🏫 Soy ${this.nombre}, profesor de ${this.materia}.`);
    }
}

// clase curso que contiene estudiantes y profesor
class Curso {
    estudiantes : Estudiante[] = [];    //Creamos un array vacío de estudiantes
    constructor(public nombre: string, public profesor: Profesor){} //Nombre de curso y contiene al profesor 

    agregarEstudiantes(e: Estudiante){
        this.estudiantes.push(e)
        console.log(`✅ Estudiante '${e.nombre}' fue agregado con éxito.`);
    }

    mostrarInfo(){
        console.log(`📚 Curso: ${this.nombre}`);
        console.log(`👨‍🏫 Profesor: ${this.profesor.nombre}`);
        
        console.log(`🧑‍🎓 Estudiantes: `);
        this.estudiantes.forEach((e, i) => {
            console.log(`${i + 1}. ${e.nombre}`);
        })
    }

}

const profJS = new Profesor("Ruben", 50, "JavaScript");

const cursoJS = new Curso("JavaScript", profJS);

cursoJS.agregarEstudiantes(new Estudiante("Marcelo", 20, "JavaScript"));
cursoJS.agregarEstudiantes(new Estudiante("Pilar", 35, "JavaScript"));

cursoJS.mostrarInfo();











