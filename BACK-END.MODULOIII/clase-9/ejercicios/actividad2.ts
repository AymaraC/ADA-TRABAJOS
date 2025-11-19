/*2. Florería: Envío Programado de Pedidos
Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe contener el nombre del cliente, la cantidad de flores 
y el tipo de flores. Implementa las siguientes funciones:
• Añadir un pedido.
• Programar el envío de un pedido utilizando setTimeout() para simular un retraso de 5 segundos.
• Mostrar todos los pedidos pendientes.*/

type Pedido = {
    nombre: string;
    cantidad: number;
    tipoFlor: string;
    enviado: boolean;
}

class Floreria {
    private _pedidos: Pedido[] = []

    agregarPedido(nombre:string, cantidad:number, tipoFlor:string){
        const nuevoPedido : Pedido = {nombre, cantidad, tipoFlor, enviado:false}
        this._pedidos.push(nuevoPedido);
        console.log(`Pedido '${nuevoPedido.nombre}' agregado con éxito`);
        
    }

    programarPedido(cliente:string){
        console.log(`Programando envío...`);
        setTimeout(() => {
            const pedidoProgramado = this._pedidos.find(p => p.nombre === cliente && !p.enviado)
            if(pedidoProgramado){
                pedidoProgramado.enviado = true;
                console.log(`Pedido enviado: '${pedidoProgramado.nombre}', Cantidad: ${pedidoProgramado.cantidad}, Tipo: ${pedidoProgramado.tipoFlor}`);
            } else {
                console.log(`No se encontró un pedido pendiente para ${cliente}`);
            }
        }, 5000)
    }

    mostrarPedidosPendientes() {
        const pendientes = this._pedidos.filter(p => !p.enviado)
        pendientes.forEach(p => {
            console.log(`Cliente: ${p.nombre}\nCantidad: ${p.cantidad}\nTipo de flor: ${p.tipoFlor}`);
            
        })
    }
}

const flores = new Floreria();
flores.agregarPedido('Aymara', 5, 'Jazmin')
flores.agregarPedido('Gabi', 4, 'Rosa')
flores.agregarPedido('Vero', 3, 'Girasol')

flores.programarPedido('Vero')

setTimeout(() => {flores.mostrarPedidosPendientes()}, 6000)