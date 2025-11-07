/*Ejercicio 2: Polimorfismo con Sobreescritura de Métodos (Tiempo de Ejecución)
Crea una jerarquía de clases de Vehiculo con dos clases derivadas: Coche y Moto. Cada clase debe sobrescribir el método 
arrancar de la clase base para proporcionar una implementación específica de cómo arrancar.*/

class Vehiculo {
    arrancar() : string {
        return `El vehiculo enciende su motor.`
    }
}

class Coche extends Vehiculo {
    arrancar(): string {
        return `🚗 El coche arranca con un botón de encendido.`;
    }
}

class Moto extends Vehiculo {
    arrancar(): string {
        return `🏍️  La moto gira la llave y arranca.`
    }
}

const transportes = new Vehiculo()
const auto = new Coche()
const motocicleta = new Moto()
console.log(transportes.arrancar());
console.log(auto.arrancar());
console.log(motocicleta.arrancar());















