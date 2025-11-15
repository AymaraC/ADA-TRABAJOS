/*Ejercicio 1: Herencia Múltiple Indirecta y Modificadores de Acceso  
Consigna: Define una clase base Negocio con un método protegido operar(). Define otra clase Consultoria que herede de 
Negocio y sobrescriba el método operar() para mostrar un mensaje sobre cómo opera el negocio de consultoría.*/

// Primero definimos la clase base
class Negocio {
    protected operar() : void {
        console.log(`El negocio está operando de forma normal.`);
    }

    // Agregamos un método público para llamar al método protegido desde fuera
    public iniciarOperacion() : void {
        this.operar()
    }
}

// Definimos clase derivada 
class Consultoria extends Negocio {
    
    // Sobreescribimos el método protegido
    protected operar(): void {
        console.log(`El negocio del consultoría opera brindando asesoramiento especializado.`);
    }
}

const miConsultora = new Consultoria();
miConsultora.iniciarOperacion()
