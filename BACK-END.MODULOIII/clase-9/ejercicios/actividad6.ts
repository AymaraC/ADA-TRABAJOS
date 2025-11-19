/*Ejercicio 6: Encapsulamiento en clases
Crea una clase CuentaBancaria que tenga atributos privados como saldo y un método público para consultar el saldo y 
otro para depositar dinero. */

class CuentaBancaria {
    constructor(private _saldo: number){}
    depositarDinero(monto: number){
        if(monto <= 0){
            console.log(`❌ ERROR. El monto ingresado es menor a 0.`);
            
        } else {
            this._saldo += monto;
            console.log(`✅ Saldo actualizado: ${this._saldo}`);
            
        }
    }

 consultarSaldo(): void {
        console.log(`Saldo: ${this._saldo}`);
    }

}

const cuenta = new CuentaBancaria(500);
cuenta.consultarSaldo();
cuenta.depositarDinero(10)






