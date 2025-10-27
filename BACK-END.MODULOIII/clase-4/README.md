# Clase 4 - TypeScript: Control de Flujo, Genéricos y Aserciones de Tipo 🧩

En esta práctica repasamos y combinamos varios conceptos de **TypeScript**, trabajando con **estructuras de control de flujo, genéricos y aserciones de tipo**.  
Cada ejercicio propone un desafío más completo para aplicar el tipado estático, bucles, funciones genéricas y manejo seguro de tipos.

---

## 📚 Actividades

### 1️⃣ For...In para recorrer propiedades de un objeto
Crea un objeto con al menos 3 propiedades (`nombre`, `edad`, `ciudad`) y usa un **bucle for...in** para recorrer y mostrar cada propiedad y su valor.

---

### 2️⃣ For...Of para recorrer los valores de un arreglo
Crea un arreglo con al menos 5 números y usa un **bucle for...of** para imprimir cada número en consola.

---

### 3️⃣ Crear una función genérica
Crea una **función genérica** que tome un parámetro de cualquier tipo y lo devuelva.  
Prueba la función con diferentes tipos de datos.

---

### 4️⃣ Usar aserciones de tipo
Declara una variable de tipo `any` y usa una **aserción de tipo** para tratarla como `string`, accediendo a la propiedad `.length`.

---

### 5️⃣ Usar aserciones dobles
Crea una variable de tipo `any` y realiza una **conversión con aserciones dobles** para transformarla en un `number`.  
Muestra el resultado en consola.

---

### 6️⃣ Filtrar elementos de un arreglo genérico usando For...Of y Aserciones
Crea una función genérica llamada `filtrarElementos` que reciba un arreglo con valores mixtos (`number | string | boolean`).  
La función debe:
- Recorrer el arreglo usando **for...of**  
- Filtrar solo los valores que sean **string**  
- Utilizar **aserciones de tipo** para acceder a propiedades específicas de string

---

### 7️⃣ Aserciones y genéricos con funciones y objetos
Crea una función genérica llamada `procesarObjeto` que reciba un objeto genérico y:
1. Use un **bucle for...in** para recorrer sus propiedades  
2. Si el valor es `string`, convertirlo a minúsculas  
3. Si es `number`, elevarlo al cuadrado  
4. Si es `boolean`, invertir su valor  

Usa **aserciones de tipo** para realizar las transformaciones de manera segura.

---

## 🗝️ Conceptos Clave
- **Bucle for...in** → recorrer propiedades de un objeto  
- **Bucle for...of** → recorrer elementos de un arreglo  
- **Funciones genéricas** → reutilizar código para distintos tipos de datos  
- **Aserciones de tipo** → garantizar que las variables sean tratadas como el tipo esperado  
- **Conversión con aserciones dobles** → transformar valores de `any` a un tipo específico  


