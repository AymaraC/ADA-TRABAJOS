/*Ejercicio 3: Interfaces - Sistema de Gestión de Usuarios
Crea una interfaz Usuario que tenga las propiedades:
• nombre (obligatoria).
• edad (opcional).
• readonly id (solo lectura).
Implementa esta interfaz en una clase UsuarioConcreto. Luego, intenta modificar la propiedad id para mostrar cómo se 
aplican las restricciones de solo lectura.*/

interface Usuario {
    nombre:string;          //Obligatorio
    edad? : number | undefined;         //Opcional
    readonly id: number;    // solo lectura, no se puede modificar luego de asignarlo
}

class UsuarioConcreto implements Usuario {
    nombre: string;
    edad?: number | undefined;
    readonly id : number
  
    constructor(nombre: string, id: number, edad? : number,){
        this.nombre = nombre;   // Asignamos nombre recibido
        this.edad = edad;       // Edad si es que la hay
        this.id = id            // ID que luego no podrá cambiarse
    }
}

const creamosUsuario = new UsuarioConcreto('Horacio', 1, 48)
console.log(
    `*Nombre: ${creamosUsuario.nombre}\n*Edad: ${creamosUsuario.edad}\n*ID: ${creamosUsuario.id}`);

/*creamosUsuario.id = 50 -> No lo podemos cambiar porque es solo lectura*/