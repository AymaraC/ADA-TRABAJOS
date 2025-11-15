/*4. Ejercicio de Taller de Reparaciones
Diseña una clase Taller que tenga propiedades privadas para nombre, direccion, servicios (un array de objetos con 
nombreServicio, precio, y descripcion), y calificaciones (un array para almacenar las calificaciones de los clientes).
Implementa métodos para agregar servicios, eliminar servicios, listar los servicios disponibles, agregar calificaciones y 
calcular el promedio de calificaciones. Si se intenta agregar un servicio con un precio negativo, imprime
un mensaje informativo. También imprime un mensaje si se intenta agregar una calificación que no está entre 1 y 5.*/

type Servicio = {
  nombreServicio: string;
  precio: number;
  descripcion: string;
};

class Taller {
    private _nombre: string;
    private _direccion: string;
    private _servicios : Servicio[] = [];
    private _calificaciones: number[] = [];


    constructor(nombre: string, direccion: string){         //No pasamos por el constructor al array de servicios porque vamos a agregar los datos a través de métodos.
        this._nombre = nombre;
        this._direccion = direccion;
    }

    get servicios(){
        return this._servicios;
    }

    get nombre() {
        return this._nombre;
    }

    get direccion(){
        return this._direccion;
    }

    agregarServicios(servicio: Servicio){

        if(servicio.precio <= 0){
            console.log(`❌ ERROR. El precio no puede ser menor a 0.`);

        } else if(this._servicios.find(s => s.nombreServicio === servicio.nombreServicio)){    //Buscá en this._servicios algún elemento s cuyo nombreServicio sea igual al nombreServicio del servicio que estoy intentando agregar.
            console.log(`❌ El servicio ya se encuentra registrado.`);

        } else {
            this._servicios.push(servicio)
            console.log(`✅ Servicio '${servicio.nombreServicio}' agregado con éxito.`);
        }
    }

    listarServicios(){
        console.table(this._servicios);         // Mostramos los servicios en formato de tabla
    }

    eliminarServicio(servicio: Servicio){

        if(!servicio){
            console.log(`❌ No se ingreso ningún servicio.`);

        } else if(!this._servicios.find(s => s.nombreServicio === servicio.nombreServicio)){
            console.log(`❌ El servicio '${servicio.nombreServicio}' ingresado no se encuentra en nuestro programa.`);

        } else {
            const eliminar = this._servicios.filter(s => s.nombreServicio !== servicio.nombreServicio)
            this._servicios = eliminar
            console.log(`El servicio '${servicio.nombreServicio}' fue eliminado con éxito.`);
        }
    }

    agregarCalificaciones(calificacion: number){

        if(calificacion < 1 || calificacion > 5){
            console.log(`❌ La calificación debe ser entre 1 y 5.`);
        } else {
            this._calificaciones.push(calificacion);
            console.log(`✅ Calificación agregada con éxito. ¡Gracias por puntuarnos!`);   
        }
    }

    calcularPromedio() {
        if (this._calificaciones.length === 0) {
            console.log('⚠️ No hay calificaciones registradas.');
        } else {
            const promedio = this._calificaciones.reduce((a, b) => a + b) / this._calificaciones.length;
            console.log(`⭐ Promedio de calificaciones: ${promedio.toFixed(2)}`);
        } 
    }

}

// Instanciamos el taller
const miTaller = new Taller("Taller Mecánico El Turbo", "Av. Siempre Viva 742");

// Agregamos algunos servicios
miTaller.agregarServicios({
  nombreServicio: "Cambio de aceite",
  precio: 15000,
  descripcion: "Incluye filtro y revisión general del motor",
});

miTaller.agregarServicios({
  nombreServicio: "Alineación y balanceo",
  precio: 12000,
  descripcion: "Servicio completo de alineación de tren delantero y balanceo de ruedas",
});

miTaller.agregarServicios({
  nombreServicio: "Lavado Premium",
  precio: 0,
  descripcion: "Lavado completo interior y exterior", // debería dar error por precio 0
});

// Listamos los servicios
console.log("\n📋 Servicios actuales:");
miTaller.listarServicios();

// Eliminamos uno
console.log("\n🗑️ Eliminando un servicio...");
miTaller.eliminarServicio({ nombreServicio: "Alineación y balanceo", precio: 12000, descripcion: "" });

// Volvemos a listar
console.log("\n📋 Servicios actualizados:");
miTaller.listarServicios();

// Agregamos calificaciones
miTaller.agregarCalificaciones(5);
miTaller.agregarCalificaciones(4);
miTaller.agregarCalificaciones(7); // debería dar error
miTaller.agregarCalificaciones(3);

// Calculamos promedio
miTaller.calcularPromedio();




















