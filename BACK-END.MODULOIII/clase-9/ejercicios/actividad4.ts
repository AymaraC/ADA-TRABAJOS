/*4. Redes Sociales: Notificaciones de Amigos
Implementa un sistema de gestión de amigos en una red social. Cada amigo debe tener un nombre y un estado (en línea o fuera de línea). 
Utiliza un setInterval() para verificar el estado de los amigos cada 5 segundos y enviar una notificación si un amigo se pone en línea.*/

type Amigo = [string, boolean]; //Tupla para amigo para mostrar el nombre y si esta o no en línea

let amigos : Amigo[] = [] //Creamos un array vacío para una lista de amigos.

function agregarAmigo(nombre:string, enLinea:boolean) {
    const nuevoAmigo : Amigo = [nombre, enLinea] // Creamos una tupla del amigo
        amigos.push(nuevoAmigo);    //La guardamos en el array
        console.log(`✅ ${nuevoAmigo} agregado con éxito.`);
}

function verificarEstado(){  //Cada cinco segundos revisa el estado de los amigos
    setInterval(() => {     // Este bloque se va a ejecutar cada 5 segundos.
        amigos.forEach(amigo => {
            const [nombre, enLinea] = amigo; // Desectructuramos la tupla para que sea más fácil leerlo
            if(!enLinea){       // Si el amigo estaba offline(false) hacemos la simulacion
                const seConecto = Math.random() < 0.5
            if(seConecto){
                amigo[1] = true; // Ahora está online
                console.log(`🔔 ${nombre} se acaba de conectar!`);
                
            }
        }
    })
    },5000)
}

agregarAmigo('Ramiro', true);
agregarAmigo('Florencia', true);
agregarAmigo('Paz', false);
verificarEstado()






