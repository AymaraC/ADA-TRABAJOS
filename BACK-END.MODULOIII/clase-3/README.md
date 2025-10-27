# Clase 3 - Modularización en TypeScript 📦

En esta práctica aplicamos conceptos de **modularización** en TypeScript, trabajando con **módulos, exportaciones, re-exportaciones, namespaces y funciones de orden superior**.  
Cada ejercicio propone un desafío que permite organizar el código de manera más limpia y reutilizable, fomentando buenas prácticas de desarrollo.

---

## 📚 Actividades

### 1️⃣ Modularización Básica
Crea un módulo `mathUtils.ts` con las funciones:
- `add(a: number, b: number): number` → devuelve la suma de a y b  
- `subtract(a: number, b: number): number` → devuelve la resta de a y b  

Luego, en `main.ts`, importa `mathUtils` y usa ambas funciones para mostrar resultados en consola.

---

### 2️⃣ Exportaciones Nombradas
En `stringUtils.ts`, crea dos funciones:
- `capitalize(str: string): string` → devuelve el string con la primera letra en mayúscula  
- `reverse(str: string): string` → devuelve el string al revés  

Exporta ambas como **exportaciones nombradas** y en `main.ts` utilízalas mostrando resultados.

---

### 3️⃣ Exportación por Defecto
Crea un módulo `user.ts` con la función:
- `createUser(name: string, age: number)` → devuelve un objeto `{name, age}`  

Exporta la función como **exportación por defecto**. En `main.ts` importa `createUser`, crea un usuario y muestra su información.

---

### 4️⃣ Tipos de Exportaciones
Crea `constants.ts` con:
- `PI = 3.1416`  
- `E = 2.718`  

Exporta ambas constantes usando **exportación directa** y **exportación separada**.  
Luego, en `main.ts` importa las constantes y muestra sus valores.

---

### 5️⃣ Re-exportación de Módulos
Crea un módulo `index.ts` que re-exporte todas las funciones y constantes de `mathUtils.ts` y `stringUtils.ts`.  
En `main.ts` importa todo desde `index.ts` y utiliza al menos una función de cada módulo.

---

### 6️⃣ Uso de Namespaces
Crea un namespace `Geometry` en `geometry.ts` con las funciones:
- `areaOfCircle(radius: number): number` → área de un círculo  
- `areaOfSquare(side: number): number` → área de un cuadrado  

En `main.ts` utiliza el namespace `Geometry` para llamar las funciones y mostrar resultados.

---

### 7️⃣ Cálculo de Áreas
Crea `shapes.ts` con funciones:
- `circleArea(radius: number): number`  
- `squareArea(side: number): number`  

Exporta como **exportaciones nombradas**. En `main.ts` importa y calcula las áreas, mostrando los resultados.

---

### 8️⃣ Funciones de Orden Superior
Crea `higherOrderFunctions.ts` con:
- `createMultiplier(factor: number): (num: number) => number` → devuelve una función que multiplica un número por el factor  

Exporta por defecto. En `main.ts` importa, crea un multiplicador (ej. ×2) y usa la función resultante.

---

### 9️⃣ Módulos y Tipos
Crea `types.ts` con:
- Tipo `Person` con `name` y `age`  
- Función `createPerson(name: string, age: number): Person`  

Exporta **tipo y función como exportaciones nombradas**. En `main.ts` crea una persona y muestra la información.

---

### 1️⃣0️⃣ Consolidación de Módulos
Crea `utils/index.ts` que centralice las exportaciones de:
- `mathUtils.ts`  
- `stringUtils.ts`  
- `user.ts`  

En `main.ts` importa lo necesario desde `utils/index.ts` y utiliza las funciones en un solo flujo de trabajo mostrando todos los resultados.

---

## 🗝️ Conceptos Clave
- **Módulos en TypeScript** → organizar código en archivos separados  
- **Exportaciones nombradas vs por defecto** → controlar cómo se importan funciones o constantes  
- **Re-exportación** → centralizar funciones de varios módulos  
- **Namespaces** → agrupar funciones relacionadas bajo un mismo espacio de nombres  
- **Funciones de orden superior** → funciones que devuelven otras funciones  
- **Tipos y Tipado** → usar interfaces y tipos para estructurar datos de forma segura  

---

