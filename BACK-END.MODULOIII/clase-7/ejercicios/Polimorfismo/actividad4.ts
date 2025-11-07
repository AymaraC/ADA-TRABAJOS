/*Ejercicio 4: Abstracción con Clases Abstractas
Implementa una clase abstracta DispositivoElectronico con métodos abstractos encender y apagar. Crea dos clases concretas 
Televisor y Radio, que sobrescriban estos métodos.*/

abstract class DispositivoElectronico {     // Define que deben hacer pero no como
    abstract encender() : void;
    abstract apagar() : void;
}

class Televisor extends DispositivoElectronico {
    encender(): void {
        console.log(`📺 El televisor se enciende con un control remoto.`);
    }

    apagar(): void {
        console.log(`Apagando televisor.. 📺`);    
    }
}

class Radio extends DispositivoElectronico {
    encender(): void {
        console.log(`📻 La radio se enciende con un botón que se encuentra generalmente en la parte superior`);
    }
    apagar(): void {
        console.log(`📻 La apagamos manteniendo presionado el botón.`);
    }
}

const dispositivos = new Televisor()
dispositivos.encender()
dispositivos.apagar()
console.log('-----------------------');
const dispositivoRadio = new Radio()
dispositivoRadio.encender()
dispositivoRadio.apagar()


