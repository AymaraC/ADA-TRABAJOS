# Clase 2 - TypeScript: Variables, Objetos y Funciones 🧩

En esta práctica aplicamos conceptos de **TypeScript** relacionados con la declaración de variables, manejo de objetos y definición de funciones.  
Cada ejercicio propone un desafío para trabajar con **tipos, parámetros opcionales, rest parameters y funciones que retornan objetos**, fortaleciendo la comprensión del tipado estático y la manipulación de datos.

---

## 📚 Actividades

### 1️⃣ Declarar y usar funciones con tipos
Crea una función `multiplicarNumeros` que acepte dos parámetros `number` y retorne su producto.  
Muestra el resultado en consola llamando a la función.

---

### 2️⃣ Funciones con parámetros opcionales
Define una función `saludar(nombre: string, saludo?: string)` que use `"Hola"` por defecto si no se proporciona el saludo.  
Retorna el saludo y muestra el resultado en consola.

---

### 3️⃣ Creación y manipulación de objetos
Crea un objeto `deportista` con propiedades `nombre` (string), `deporte` (string) y `energia` (number).  
Define una función `entrenar(deportista, horas)` que disminuya la energía en 5 por cada hora de entrenamiento y muestra el estado final en consola.

---

### 4️⃣ Función que devuelve un objeto
Crea una función `crearLibro(titulo: string, autor: string, paginas: number)` que retorne un objeto con esas propiedades.  
Crea dos libros y muestra sus detalles en consola.

---

### 5️⃣ Función con parámetros rest
Crea una función `sumarTodos(...numeros: number[])` que devuelva la suma de todos los números proporcionados.  
Llama a la función con varios valores y muestra el resultado en consola.

---

### 6️⃣ Tipos de parámetros y funciones que retornan objetos
Crea una función `crearPersona(nombre: string, edad: number, pais: string)` que retorne un objeto con esas propiedades.  
Imprime el objeto en consola.

---

### 7️⃣ Función que modifica propiedades de un objeto
Crea una función `aumentarSalario(empleado, porcentaje)` que acepte un objeto `empleado` con `nombre` y `salario`, y aumente el salario según el porcentaje.  
Devuelve el nuevo salario y muestra el resultado en consola.

---

### 8️⃣ Funciones con diferentes tipos de retorno
Crea una función `calcularArea(tipo: "circulo" | "rectangulo", ...)` que acepte los parámetros necesarios según la figura y retorne el área.  
Usa tipos específicos para cada caso (radio para círculo, largo y ancho para rectángulo).

---

### 9️⃣ Funciones con retorno void y manipulación de objetos
Crea un objeto `coche` con propiedades `marca`, `modelo` y `encendido` (boolean).  
Define una función `encenderCoche(coche)` que cambie `encendido` a `true`.  
Muestra el estado del coche antes y después de llamar a la función.

--

### 🔟 Funciones y arrays de objetos
Crea una función `listarLibros(libros: {titulo: string, autor: string}[])` que recorra el array y muestre los detalles de cada libro en consola.

---

## 🗝️ Conceptos Clave
- **Funciones con tipos** → declarar tipos de parámetros y retorno  
- **Parámetros opcionales y rest** → flexibilizar la entrada de datos  
- **Objetos y manipulación** → crear, actualizar y acceder a propiedades  
- **Funciones que retornan objetos** → organizar y estructurar datos  
- **Tipos específicos según condiciones** → garantizar seguridad en operaciones  
- **Funciones void** → modificar objetos sin retornar valores  

---