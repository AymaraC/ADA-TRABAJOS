/*Ejercicio 4: Sistema de Gestión de Biblioteca
Crea un sistema para gestionar libros y miembros de una biblioteca. Usa una clase abstracta Publicacion, clases concretas Libro y Revista, y 
una clase Biblioteca que gestione el préstamo de publicaciones.*/

abstract class Publicacion {
  constructor(public titulo:string, public anio: number, public prestado: boolean){}

  abstract mostrarInfo() : void;
}

class Libro extends Publicacion {
  constructor(public titulo:string, public anio: number, prestado:boolean, public genero:string, public autor:string){
    super(titulo, anio,prestado)
    this.genero = genero;
    this.autor = autor;
  }

    mostrarInfo(): void {
        console.log(`📚 Información de Libro:\n-Nombre: ${this.titulo}\n-Autor: ${this.autor}\nAño de publicación: ${this.anio}-Genero: ${this.genero}`);
    }
}

class Revista extends Publicacion {
    mostrarInfo(): void {
        console.log(`Información de Revista: \n${this.titulo}\nAño de publicación: ${this.anio}`);
    }
}

class Biblioteca {
    publicaciones : Publicacion[] = []

    listarPublicaciones() {
        this.publicaciones.forEach((pub, index) => {
            console.log(`${index + 1}. ${pub.titulo} : ${pub.prestado ? "❌ Prestado" : "✔ Disponible"}`);
        })
    }

    agregarPublicaciones(pub: Publicacion) {
        this.publicaciones.push(pub);
        console.log(`✅ '${pub.titulo}' agregada con éxito.`);
    }

    prestamos(titulo: string) {
    const pub = this.publicaciones.find((p) => p.titulo === titulo);

    if (!pub) {
      console.log(`❌ '${titulo}' no existe.`);
      return; 
    }

    if (pub.prestado) {
      console.log(`⚠️ '${titulo}' ya está prestado.`);
      return; 
    }

    pub.prestado = true;
    console.log(`📕 '${pub.titulo}' fue prestado con éxito.`);
  }
}

const b = new Biblioteca();
const l1 = new Libro("IT", 1986, false, "Terror", "Stephen King");
const l2 = new Libro('La milla verde', 1996, true, 'Terror', 'Sthepen King');
const r1 = new Revista('Magazine', 1990, false)
b.agregarPublicaciones(l1);
b.agregarPublicaciones(l2)
b.agregarPublicaciones(r1)
b.listarPublicaciones();







