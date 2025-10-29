/*Ejercicio 9: Registro de Estudiantes
1. Crea un sistema para registrar Estudiantes con las siguientes clases:
-Estudiante: Clase que incluye propiedades como nombre, edad y curso, además de un método que muestre la información del
estudiante.
-RegistroEstudiantes: Clase que maneje una lista de estudiantes, con métodos para agregar un estudiante y mostrar todos los estudiantes
registrados.*/

class Estudiante {
    nombre:string;
    edad:number;
    curso:string;
    informacionEstudiante() : void {
        console.log(`El estudiante ${this.nombre} de edad ${this.edad} años se encuentra en el curso de ${this.curso}`);
    }

    constructor(nombre:string, edad:number,curso:string){
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
}

class RegistroEstudiantes {
    listaDeEstudiantes : Estudiante[] = []
    agregarEstudiante(estudiante: Estudiante) : void {
        this.listaDeEstudiantes.push(estudiante)
    } 
    mostrarEstudiantes() :void {
        this.listaDeEstudiantes.forEach(e => {
            e.informacionEstudiante();
            
        });
        
    }
}


const registro = new RegistroEstudiantes();
registro.agregarEstudiante(new Estudiante('Aymara', 27, 'Backend'));
registro.agregarEstudiante(new Estudiante('Juan Ignacio', 22, 'Frontend'));
registro.agregarEstudiante(new Estudiante('Diego', 30, 'Python'))

registro.mostrarEstudiantes();







