/*3. Compañía de Seguros: Renovación Automática de Pólizas
Desarrolla un sistema que gestione las pólizas de seguros de una compañía.
Cada póliza debe tener un identificador, nombre del cliente, monto asegurado y una fecha de renovación. Implementa las 
siguientes funciones:
• Añadir una póliza.
• Programar la renovación de la póliza utilizando setTimeout().
• Mostrar todas las pólizas activas.*/

type polizas = [
    id: number, 
    nombre: string, 
    monto: number, 
    fechaDeRenovacion: number, 
    activa: boolean] //ID, nombre de cliente, monto, fecha de renovación y si están activas.

let listadoPolizas : polizas[] = []

function agregarPoliza(id: number, nombre: string, monto: number, fechaDeRenovacion: number, activa: boolean){
    const nuevoPedido : polizas = [id, nombre, monto, fechaDeRenovacion, activa]
    listadoPolizas.push(nuevoPedido);
    console.log(`✅ Poliza ${id} del cliente ${nombre} agregada con éxito.`);
}

function renovacionPoliza(id: number){
    setTimeout(() => {
       const poliza = listadoPolizas.find(p => p[0] === id);
        if(!poliza){
            console.log(`❌ Póliza no encontrada.`);
        } else {
            poliza[4] = true;
            console.log(`Póliza actualizada.`);
        }
    }, 5000)
}

function mostrarPolizasActivas(){
    listadoPolizas.forEach(p => {
        console.log(`📄 Póliza: 
            ID: ${p[0]} 
            Cliente: ${p[1]}
            Monto: ${p[2]}
            Fecha de renovación: ${p[3]}
            Activa: ${p[4] ? 'Sí' : 'No'} `);        
    })
}

agregarPoliza(1, 'Teo', 100, 14, true);
agregarPoliza(2, 'Candela', 50, 15, true);
renovacionPoliza(1);
mostrarPolizasActivas()















