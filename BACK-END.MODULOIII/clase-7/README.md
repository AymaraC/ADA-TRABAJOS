Clase 15 - Encapsulamiento y Polimorfismo en TypeScript 🧩

En esta clase trabajamos con principios fundamentales de la Programación Orientada a Objetos (POO) aplicados en TypeScript: Encapsulamiento y Polimorfismo.
A través de distintos ejercicios, exploramos cómo proteger los datos dentro de las clases, controlar su acceso mediante getters y setters, y cómo reutilizar comportamientos mediante la sobrecarga y sobrescritura de métodos.

🧱 Actividades de Encapsulamiento

🏎️ Ejercicio 1: Coche

Crea una clase Coche con propiedades privadas: marca, modelo, año, y kilometraje.
Implementa métodos para encender el coche y realizar un viaje, validando que:

El año no sea menor a 1886.

El kilometraje no pueda ser negativo.
En caso de valores inválidos, se debe imprimir un mensaje de error.

📚 Ejercicio 2: Libro

Diseña una clase Libro con propiedades privadas: titulo, autor, anioPublicacion, y disponible.
Incluye métodos para prestar y devolver el libro, asegurando que solo se pueda prestar si está disponible y devolver si ha sido prestado.
Debe mostrar mensajes cuando se intente una acción no válida.

🎓 Ejercicio 3: Estudiante

Crea una clase Estudiante con propiedades privadas: nombre, edad, y calificaciones.
Agrega métodos para:

Añadir calificaciones válidas (entre 0 y 100).

Calcular el promedio, mostrando un mensaje si no hay notas registradas.

✈️ Ejercicio 4: Avión

Implementa una clase Avion con propiedades privadas modelo, capacidad y velocidad.
Utiliza getters y setters para validar que:

La capacidad no sea menor que 0.

La velocidad no sea negativa.

📝 Nota: Usa el operador ! para afirmar la inicialización de propiedades dentro del constructor, aplicando los setters para la validación.

🏖️ Ejercicio 5: Vacaciones

Crea una clase Vacacion con propiedades privadas: destino, duracion (en días) y presupuesto.
Usa getters y setters asegurando que:

duracion sea al menos 1 día.

presupuesto sea mayor que 0.

🛒 Ejercicio 6: Supermercado

Diseña una clase Producto con propiedades privadas: nombre, precio, cantidad.
Valida con getters y setters que:

El precio no sea negativo.

La cantidad no sea menor que 0.

🔁 Actividades de Polimorfismo

 Ejercicio 1: Polimorfismo con Sobrecarga

Crea una clase Calculadora con un método sumar() sobrecargado para:

Sumar dos números enteros.

Sumar tres números enteros.

Concatenar dos cadenas.

🚗 Ejercicio 2: Polimorfismo con Sobreescritura

Crea una clase base Vehiculo y dos derivadas: Coche y Moto.
Cada una debe sobrescribir el método arrancar() con su propio comportamiento.

🏦 Ejercicio 3: Encapsulamiento con Métodos Privados

Crea una clase Banco con un saldo privado, modificable solo mediante los métodos:

depositar(cantidad)

retirar(cantidad)
Ambos deben validar que la cantidad no sea negativa.
Incluye un método público para consultar el saldo.

📱 Ejercicio 4: Abstracción con Clases Abstractas

Define una clase abstracta DispositivoElectronico con los métodos abstractos encender() y apagar().
Implementa las clases Televisor y Radio, sobrescribiendo estos métodos con su propia lógica.

👨‍💻 Ejercicio 5: Uso de Interfaces para Polimorfismo

Crea una interfaz Empleado con el método trabajar().
Implementala en las clases Programador y Diseñador, cada una con su propia versión del método.
Luego, crea una función que reciba un objeto tipo Empleado y llame a su método trabajar().

🦆 Ejercicio 6: Herencia Múltiple Simulada

Crea dos interfaces Volador y Nadador con los métodos volar() y nadar().
Implementalas en una clase Pato que combine ambos comportamientos, demostrando la herencia múltiple a través de interfaces.