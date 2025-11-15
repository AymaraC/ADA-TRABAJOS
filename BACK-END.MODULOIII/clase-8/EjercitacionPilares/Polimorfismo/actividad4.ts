/*Ejercicio 4: Polimorfismo y Sobreescritura Compleja con Interacción entre Clases
Crea una clase Cliente que pueda asociarse a una CuentaBancaria. Crea diferentes tipos de clientes, como ClienteVIP que 
tiene beneficios adicionales. Cada tipo de cliente puede realizar depósitos y retiros, pero los clientes VIP
pueden retirar sin comisiones.*/

class CuentaBancaria {
   constructor(protected saldo: number){}
   depositar(value: number) : void {
    if(!value || value < 0){
        console.log(`❌ Monto incorrecto`);
    } else {
        this.saldo += value;
        console.log(`✅ Saldo actualizado. Total en cuenta: $${this.saldo}`);
    }
   }

   retirar(value: number) : void {
    if(!value || value > this.saldo){
        console.log(`❌ Saldo ingresado incorrecto o insuficiente`);
        
    } else {
        this.saldo -= value;
        console.log(`✅ Retiro exitoso. Saldo en cuenta: $${this.saldo}`);
    }
   }
}

class Cliente {
    constructor(protected cuenta : CuentaBancaria){}

    depositarDinero(monto: number){
        this.cuenta.depositar(monto);
    }

    retirarDinero(monto: number){
        const comision = monto * 0.05;
        const total = monto + comision
        this.cuenta.retirar(total)
        console.log(`💵 Comisión aplicada: $${comision}. Total descontado: $${total}`);
    }
}

class ClienteVIP extends Cliente {
    depositarDinero(monto: number): void {
        this.cuenta.depositar(monto);
    }

    retirarDinero(monto: number): void {
        this.cuenta.retirar(monto);
    }
}

console.log('--Cliente--');
const cuentaCliente = new CuentaBancaria(5000);
const cliente = new Cliente(cuentaCliente);
cliente.depositarDinero(1000)   //output: 6000
cliente.retirarDinero(2000)     //output: 3900 (comisión aplicada)

console.log('--Cliente VIP--');
const cuentaClienteVIP = new CuentaBancaria(10000);
const clienteVIP = new ClienteVIP(cuentaClienteVIP);
clienteVIP.depositarDinero(5000);     //output: 15000
clienteVIP.retirarDinero(1000);       //output: 14000