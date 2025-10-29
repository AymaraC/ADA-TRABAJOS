// Definicion de interfaz 'Estudiante'
interface Estudiante {
    nombre: string;
    edad: number;
    materiaFavorita: string;
    promedio: number;

    saludar: () => void;
    obtenerDetalles: () => string;
}

// Creacion de un objeto que cumple con la interfaz 'Estudiante'
const estudiante1: Estudiante = {
    nombre: 'Ana',
    edad: 21,
    materiaFavorita: 'Matematica',
    promedio: 9.5,

    // Implementamos los métodos
    saludar:function() {
        console.log(`Hola, mi nombre es ${estudiante1.nombre}, tengo ${estudiante1.edad} y mi materia favorita es ${estudiante1.materiaFavorita}.`);
    },

    obtenerDetalles: function(){
        return `Nombre: ${estudiante1.nombre}\nEdad: ${estudiante1.edad}\nMateria favorita: ${estudiante1.materiaFavorita}\nPromedio: ${estudiante1.promedio}`
    }
}

// Usamos el método saludar
estudiante1.saludar()

// Usamos el método obtenerDetalles
const detalles = estudiante1.obtenerDetalles();
console.log(detalles);





