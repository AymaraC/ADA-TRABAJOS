# Clase 5 - Programación Orientada a Objetos (POO) en TypeScript 🧩

En esta práctica aprendemos los conceptos fundamentales de la **Programación Orientada a Objetos (POO)** aplicados en **TypeScript**.  
A través de los ejercicios, trabajamos con **objetos, clases, interfaces, modificadores de acceso, herencia, y el uso del método `super()`**.  
El objetivo es comprender cómo estructurar el código de forma modular, reutilizable y escalable.

---

## 🧠 Actividades

### 1️⃣ Creación de Objetos y Atributos
- Define un objeto que represente un **libro** con las propiedades: `título`, `autor` y `año de publicación`.  
- Crea una instancia del objeto y muestra sus propiedades en consola.

---

### 2️⃣ Métodos en Objetos
- Modifica el objeto anterior para incluir un método `descripcion()` que devuelva una descripción del libro.  
- Llama al método y muestra el resultado en consola.

---

### 3️⃣ Clases y Objetos
- Define una clase `Animal` con propiedades `nombre` y `tipo`, y un método `hacerSonido()`.  
- Crea una instancia de la clase y llama al método.

---

### 4️⃣ Interfaces
- Crea una **interfaz** `IPersona` con las propiedades `nombre`, `edad` y un método `presentarse()`.  
- Implementa una clase `Persona` que implemente esta interfaz y defina el comportamiento del método.

---

### 5️⃣ Uso de `this`
- Define una clase `Mariposa` con propiedades `nombre` y `color`.  
- Crea un método `volar()` que utilice `this` para acceder a las propiedades de la instancia.  
- Crea una instancia y llama al método.

---

### 6️⃣ Modificadores de Acceso
- Crea una clase `Coche` con propiedades `marca` y `modelo` (públicas) y `precio` (privada).  
- Implementa un método para mostrar la información del coche **sin acceder directamente** a la propiedad privada.

---

## 🚀 Ejercicios Integradores

> A partir de aquí se combinan todos los conceptos vistos anteriormente.  
> Es recomendable investigar el uso de **herencia** y **super()** en TypeScript.

---

### 7️⃣ Sistema de Animales
Crea un sistema con las siguientes clases:
- **Animal** → propiedades `nombre` y `tipo`.  
- **Mascota** (hereda de Animal) → agrega propiedad `dueño`.  
- **MascotaExotica** (hereda de Animal) → agrega propiedad `habitat`.

Implementa métodos para mostrar información de cada tipo de animal y crea ejemplos de instancias.

---

### 8️⃣ Sistema de Gestión de Vehículos
Crea un sistema que incluya:
- **Vehiculo**: clase base con `marca`, `modelo` y un método para mostrar información.  
- **Coche** (hereda de Vehiculo): agrega `tipoCombustible` y redefine el método de información.  
- **Motocicleta** (hereda de Vehiculo): agrega `cilindrada` y redefine el método de información.

---

### 9️⃣ Registro de Estudiantes
Desarrolla un sistema que maneje estudiantes:
- **Estudiante**: clase con propiedades `nombre`, `edad` y `curso`, y un método para mostrar información.  
- **RegistroEstudiantes**: clase que contenga una lista de estudiantes, con métodos para **agregar** y **mostrar** todos los registros.

---

## 🗝️ Conceptos Clave

- **Objetos y métodos** → estructura básica de datos y comportamiento  
- **Clases e instancias** → base de la programación orientada a objetos  
- **Interfaces** → contratos que definen la forma de un objeto o clase  
- **this** → referencia a la instancia actual  
- **Modificadores de acceso** → control de visibilidad (`public`, `private`, `protected`)  
- **Herencia y super()** → reutilización y extensión de clases  
- **Encapsulación y abstracción** → código más limpio y mantenible  


