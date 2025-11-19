/*5. Banco: Transferencias Programadas
Crea un sistema para gestionar cuentas bancarias en un banco. Cada cuenta debe tener un nombre del propietario, un saldo y un estado 
(activo o inactivo). Implementa las siguientes funciones:
• Añadir una cuenta.
• Realizar una transferencia entre cuentas después de un retraso de 8 segundos utilizando setTimeout().
• Mostrar todas las cuentas. */

type Cuenta = [string, number, boolean] //Definimos como va a ser la tupla Cuenta. Toda tupla cuenta debe tener estos tipos: Nombre de propietario, saldo y estado. 

let cuentasBancarias : Cuenta[] =[]

function agregarCuenta(nombre:string, saldo: number, estado: boolean) {
    const nuevaCuenta : Cuenta = [nombre, saldo, estado]        //Creamos la tupla
    cuentasBancarias.push(nuevaCuenta);
    console.log(`✅ Cuenta agregada: '${nombre}' con saldo $${saldo}. Estado: ${estado? 'Activa': 'No activa'}`);
}

function mostrarLasCuentas(){
    cuentasBancarias.forEach(c => {
        console.log(`Cuentas: \nTitular: ${c[0]}\nSaldo: ${c[1]}\nEstado: ${c[2]? 'Activa': 'No activa'}`) //Se le pasa las posiciones de la tupla  
    });
}

function transferencias(origen: number, destino: number, monto: number){
    setTimeout(() => {
        if(cuentasBancarias[origen] && cuentasBancarias[destino]){ //Si ambas cuentas existen entonces:
            if(!cuentasBancarias[destino][2]){ //Por si la cuenta de destino está inactiva.
                console.log(`❌ La cuenta de destino '${cuentasBancarias[destino][0]}' está inactiva. No se puede transferir.`);
        }else if(cuentasBancarias[origen][1] >= monto){  //Fondo insuficientes
                cuentasBancarias[origen][1] -= monto //transferimos a cuenta de destino
                cuentasBancarias[destino][1] += monto
                console.log(`✅ Transacción exitosa '${cuentasBancarias[origen][0]}' transfirió ${monto} a ${cuentasBancarias[destino][0]}`);
                

           } else {
                console.log(`❌ Saldo insuficiente`);
                
           }
            
        } else{ 
            console.log(`❌ Alguna cuenta es inexistente.`);
            
        }
    },8000)
}

// Creamos algunas cuentas
agregarCuenta("Pedro", 1000, true);      // Activa
agregarCuenta("Sofía", 1500, true);      // Activa
agregarCuenta("Lucas", 500, false);      // Inactiva
agregarCuenta("Marta", 50, true);        // Activa

// Mostramos las cuentas
mostrarLasCuentas();

// --- CASOS DE PRUEBA ---

// 1️ Transferencia exitosa (todo ok)
transferencias(0, 1, 200);  // Pedro → Sofía $200

// 2️ Fondos insuficientes
transferencias(3, 1, 100);  // Marta → Sofía $100 (solo tiene $50)

// 3️ Cuenta destino inactiva
transferencias(0, 2, 100);  // Pedro → Lucas $100 (Lucas está inactivo)

// 4 Cuenta inexistente
transferencias(0, 10, 50);  // Pedro → cuenta índice 10 (no existe)











