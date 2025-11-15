/*3. Ejercicio de Playlist
Diseña una clase Playlist que contenga propiedades privadas para nombre y canciones (un array de títulos de canciones). 
Implementa métodos para agregar canciones, eliminar canciones y listar todas las canciones en la playlist.
Asegúrate de que se imprima un mensaje si se intenta agregar una canción vacía o eliminar una canción que no existe.*/

class Playlist {
    private _nombre: string;
    private _canciones: string[] = []       //Lo inicializamos vacío
    
    constructor(nombre:string){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre
    }

    agregarCanciones(cancion: string){
        if(!cancion){               //Evitamos string vacíos
            console.log(`❌ No se encontró ningín título para agregar.`);
            
        } else if(this._canciones.includes(cancion)){       //Evitamos duplicados
            console.log(`❌ La canción ya se encuentra en la lista.`);
            
        } else {
            this._canciones.push(cancion);
            console.log(`✅ Canción '${cancion}' agregada con éxito a la playlist ${this.nombre}.`);
        }
    }

    listarCanciones(): string {
    if (this._canciones.length === 0) {
        return "La playlist está vacía.";
    }

    let lista = "";
    this._canciones.forEach((c, i) => {             // Construimos un string con numeración y saltos de línea
        lista += `${i + 1}. ${c}\n`;
    });

    return lista; // devolvemos todo el string listo para imprimir
    }


    eliminarCanciones(cancion:string) {
        if(!cancion){
            console.log(`No se paso ninguna canción.`);

        } else if(!this._canciones.includes(cancion)){
            console.log(`❌ La canción seleccionada no se encuentra en la lista.`);

        } else{
            const eliminar = this._canciones.filter(c => c !== cancion)
            this._canciones = eliminar
            console.log(`✅ Canción '${cancion}' eliminada con éxito.`);
        }
    }
}

const c1 = new Playlist('Favoritas');

c1.agregarCanciones('Car Radio')
c1.agregarCanciones('The Contract')
c1.agregarCanciones('Ride')


console.log('--Listamos las canciones--');
console.log(c1.listarCanciones());

console.log('--Eliminamos una cancion--');
c1.eliminarCanciones('Ride')
console.log(c1.listarCanciones());






