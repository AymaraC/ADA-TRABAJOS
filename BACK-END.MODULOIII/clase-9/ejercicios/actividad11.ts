/*Ejercicio 11: Sistema de Reservas en una Peluquería con Herencia y Polimorfismo
Crea un sistema de reservas para una peluquería. Define una clase Servicio con atributos comunes como nombre, duracion, 
y precio. Luego, crea clases concretas para diferentes servicios como CorteDeCabello y Manicura. Implementa una clase 
Cliente y una clase Reserva que asocie clientes con servicios. Usa polimorfismo para permitir la reserva de cualquier 
tipo de servicio y encapsulamiento para gestionar la disponibilidad de horarios.*/

 abstract class Servicio {
    constructor(public nombre: string, public duracion: number, public precio: number){}
    abstract tratamiento(): void;
}

class CorteDeCabello extends Servicio {
      constructor(duracion: number, precio: number) {
    super("Corte de Cabello", duracion, precio);
  }
   tratamiento(){
    console.log(`💇‍♀️ SERVICIO: ${this.nombre}\n⏱ DURACIÓN: ${this.duracion}\n💰 PRECIO: $${this.precio}`);
   }

}

class Manicura extends Servicio {
      constructor(duracion: number, precio: number) {
    super('Manicura', duracion, precio);
  }
   tratamiento(){
    console.log(`💅 SERVICIO: ${this.nombre}\n⏱ DURACIÓN: ${this.duracion}\n💰 PRECIO: $${this.precio}`);
   }

}
class Cliente{
    constructor(public cliente: string, public telefono: number){}
    mostrarInfo(){
        console.log(`👩 CLIENTE: ${this.cliente}\nTELEFONO: ${this.telefono}`);
    }
}

class Reserva {
    constructor(public cliente: Cliente, public servicio: Servicio, private _disponibilidadHoraria: number){}
    get disponibilidadHoraria(){
        return this._disponibilidadHoraria;
    }
}

// Clase que maneja todas las reservas
class Agenda {      
    private horariosOcupados: number[] = [];    //Guarda los horarios ya reservados en un array.

    reservar(cliente: Cliente, servicio: Servicio, horario: number) {   //Instancia la clase cliente y servicio. Tambien se agrega number para representar el horario que se quiere reservar.
        if (this.horariosOcupados.includes(horario)) { //Comprobamos si el horario elegido ya está ocupado. .includes()devuelve true si ya existe → significa que ya hay una reserva en ese horario.
            console.log("❌ Ese horario ya está ocupado");
            return;
        }

        this.horariosOcupados.push(horario);    //Sino está ocupado, agrega el horario al array

        const reserva = new Reserva(cliente, servicio, horario);

        console.log("✅ Reserva realizada:");
        reserva.servicio.tratamiento();
        return reserva;
    }
}


// Crear servicios
const corte = new CorteDeCabello( 45, 5000);
const mani = new Manicura( 60, 6500);

// Crear clientes
const cliente1 = new Cliente("Aymara", 1155555555);
const cliente2 = new Cliente("Lourdes", 1144444444);

// Crear agenda
const agenda = new Agenda();

// ----------------------
// RESERVAS DE EJEMPLO
// ----------------------

// 1️⃣ Reserva normal
agenda.reservar(cliente1, corte, 10);

// 2️⃣ Otra reserva en otro horario
agenda.reservar(cliente2, mani, 12);

// 3️⃣ Intentar reservar un horario ocupado
agenda.reservar(cliente2, corte, 10);

// 4️⃣ Otra reserva válida
agenda.reservar(cliente1, mani, 15);




