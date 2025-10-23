// 1. Definicion de un objeto básico
let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2023,
};

//Mostramos las propiedades
console.log(`Marca: ${auto.marca}
Modelo: ${auto.modelo}
Año: ${auto.anio}`);
console.log('\n -------------\n');

// 2. Definición de objeto con declaración explicita del tipo
let libro:{titulo: string; autor: string; anio: number} = {
    titulo: '100 años de soledad',
    autor: 'Gabriel García Marquez',
    anio: 1984,
};
console.log(`Libro: ${libro.titulo}
Autor: ${libro.titulo}
Año de publicación: ${libro.anio}`);
console.log('\n -------------\n');

// 3. Objeto con propiedades opcionales
let estudiante : {nombre: string, edad ?: number} = {
    nombre: 'Aymara',
    edad: 27,
}
console.log(`Nombre del estudiante: ${estudiante.nombre}
Edad: ${estudiante.edad ?? 'Desconocida'}`);        //Con los dos signos de pregunta significa que tengo una sola opción. Es la edad y sino está el desconocida.
console.log('\n -------------\n');

// 4. Métodos en un objeto
let perro = {
    nombre: 'Firulais',
    raza: 'Caniche',
    ladrar: function(){
        return `${this.nombre} está ladrando.` //El this hace referencia al objeto. En vez de poner perro.nombre usamos el this. Se utiliza en programación orientada a objetos
    }    
}
console.log(perro.ladrar());



