/*Ejercicio 3: Encapsulamiento con Métodos Privados
Crea una clase Banco con un saldo inicial privado. El saldo solo puede ser modificado a través de un método depositar y 
otro retirar, los cuales deben validar que la cantidad no sea negativa. Implementa métodos públicos para
consultar el saldo.*/

class Banco{
    constructor(private _saldoInicial : number){}

    public get saldo() : number {           // Hacemos que el saldo se pueda ver por fuera de la clase
        return this._saldoInicial
    }

   public depositar(value: number) : void {
        if(value <= 0) {
            console.log(`🚫 Importe no válido`);
            
        } else {
            console.log(`✅ Se depositaron $${value}. Nuevo saldo: $${this._saldoInicial}`);
        }
   }

    public retirar(value:number) : void{
        if(value < 0) {
            console.log(`🚫 ERROR: Importe no válido`);
            
        } else if(value > this._saldoInicial) {
            console.log(`🚫 ERROR: Fondos insuficientes.`);
            
        } else {
            this._saldoInicial -= value;
            console.log(`✅ Se retiraron $${value}. Nuevo saldo: $${this._saldoInicial}`);
        }
    }

}

const cuentaBancaria = new Banco(10000)
console.log(`💰 Dinero en cuenta: $${cuentaBancaria.saldo}`);
cuentaBancaria.depositar(9000)
cuentaBancaria.retirar(1000)
console.log(`💰 Saldo final: $${cuentaBancaria.saldo}`);










