/*Ejercicio 4: Comparación - Clases Abstractas vs Interfaces
Crea una interfaz PagoOnline con un método procesarPago().
Crea una clase abstracta Pago con un método concreto validarMonto() y un método abstracto completarPago().
Implementa ambas estructuras en una clase concreta PagoConTarjeta.*/

interface PagoOnline {
    procesarPago() : void;
}

abstract class Pago {
    validarMonto(){}

    abstract completarMonto() : void
}

class PagoConTarjeta extends Pago implements PagoOnline {
     validarMonto(): void {
        console.log(`Validando...`);
    }

     procesarPago(): void {
        console.log(`Procesando el pago en línea...`);
    }

    completarMonto(): void {
        console.log(`✅ Pago completado`);
    }
}

const nuevoPago = new PagoConTarjeta();
nuevoPago.validarMonto()
nuevoPago.procesarPago()
nuevoPago.completarMonto()

