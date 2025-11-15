/*Ejercicio 3: Encapsulamiento y Herencia con Protección de Datos
Crea una clase CuentaBancaria con métodos para depositar y retirar dinero, pero protege el saldo para que solo pueda 
ser modificado dentro de la clase. Crea una subclase CuentaAhorros que agregue interés al saldo.*/

class CuentaBancaria {

    cliente: string;
    private _saldo: number
    constructor(cliente:string, saldo: number){
        this.cliente = cliente;
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo
    }

    depositarDinero(monto: number) : any {
        if(monto <= 0){
            return `❌ ${this.cliente}, el monto ingresado $${monto} no es válido.`
        } else {
            this._saldo += monto;
            return `✅ ${this.cliente}, el deposito exitoso .Nuevo saldo: $${this._saldo}`
        }
    }

    retirarDinero(monto: number) : any {
        if(!monto){
            return `❌ ${this.cliente}, no se ingreso ningun monto.`
        } else if(monto > this._saldo){
            return `❌ ${this.cliente}, fondos insuficientes.`
        } else{
            this._saldo -= monto
            return `✅ ${this.cliente}, retiro exitoso. Saldo actual: $${this._saldo}`
        }
    }
}

class CuentaAhorros extends CuentaBancaria {
    agregarInteres(tasa: number) : string {
        const interes = this.saldo * tasa
        this.depositarDinero(interes)       //Utilizamos el método publico depositar(porque el interes es como un deposito) que tiene acceso a la propiedad privada _saldo
        return `💰 ${this.cliente}, se agregó un interés de $${interes.toFixed(2)}. Nuevo saldo: $${this.saldo.toFixed(2)}.`
    }
}

const cliente = new CuentaBancaria('Rafael', 5000);
console.log(cliente.depositarDinero(0));
console.log(cliente.retirarDinero(500));

const ahorro = new CuentaAhorros('Rafael', 10000);
console.log(ahorro.agregarInteres(0.010));






