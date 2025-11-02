# Clase 6 - Herencia y Abstracción en TypeScript 🏗️

En esta práctica profundizamos en los conceptos de **herencia, sobrescritura de métodos, modificadores de acceso, interfaces y clases abstractas**.  
Los ejercicios están diseñados para que comprender cómo **reutilizar y extender código**, y cómo **ocultar detalles internos mientras expones comportamientos comunes** en sistemas más complejos.

---

## 🧠 Actividades: Herencia

### 1️⃣ Herencia Simple
- Crea una clase base `Torta` con propiedades `nombre` y `tipo`, y un método `hacerDescripcion()` que devuelva una descripción general.  
- Crea una clase derivada `TortaDeChocolate` que sobrescriba `hacerDescripcion()` para devolver:  
*"Soy una torta de chocolate, deliciosa y suave."*

---

### 2️⃣ Herencia Simple con Acceso
- Crea una clase base `Maestro` con propiedades **protegidas** `nombre` y `materia`, y un método `enseñar()`.  
- Crea una clase derivada `MaestroMatematicas` que sobrescriba `enseñar()` para imprimir un mensaje específico de matemáticas.

---

### 3️⃣ Herencia Múltiple Indirecta (vía Interfaces)
- Crea dos interfaces:  
  - `Volador` con método `volar()`  
  - `Transportable` con método `transportar()`  
- Implementa ambas interfaces en una clase `Avion` y sobrescribe los métodos.

---

### 4️⃣ Herencia de Métodos y Sobrescritura
- Crea una clase base `Flor` con método `describir()` que imprime un mensaje general.  
- Crea dos clases derivadas `Rosa` y `Girasol`, cada una sobrescribiendo `describir()` con un mensaje específico.

---

### 5️⃣ Herencia con Modificadores de Acceso
- Crea una clase base `Compania` con `nombreCompania` (**privado**) e `ingresosAnuales` (**protegido**).  
- Crea una clase derivada `EmpresaTecnologia` que use el atributo protegido y agregue un método para calcular el doble de los ingresos anuales.

---

## 🧠 Actividades: Abstracción

### 1️⃣ Abstracción Básica - Cafetería
- Crea una interfaz `Bebida` con método `preparar()`.  
- Implementa la interfaz en dos clases `Cafe` y `Te`.  
- Ambas clases ocultan la lógica de preparación pero exponen un comportamiento común.

---

### 2️⃣ Clases Abstractas - Sistema de Vehículos
- Crea una clase abstracta `Vehiculo` con propiedad `velocidad` y método abstracto `mover()`.  
- Implementa clases concretas `Auto` y `Bicicleta`.  
- Usa modificadores de acceso para controlar visibilidad de propiedades.

---

### 3️⃣ Interfaces - Sistema de Gestión de Usuarios
- Crea una interfaz `Usuario` con:  
  - `nombre` (obligatorio)  
  - `edad` (opcional)  
  - `readonly id` (solo lectura)  
- Implementa la interfaz en una clase `UsuarioConcreto`.  
- Intenta modificar `id` para observar la restricción de solo lectura.

---

### 4️⃣ Comparación - Clases Abstractas vs Interfaces
- Crea una interfaz `PagoOnline` con método `procesarPago()`.  
- Crea una clase abstracta `Pago` con método concreto `validarMonto()` y método abstracto `completarPago()`.  
- Implementa ambas estructuras en una clase concreta `PagoConTarjeta`.

---

### 5️⃣ Decidir Entre Clases Abstractas e Interfaces
- Diseña un sistema de transporte público:  
  - Interfaz `VehiculoElectrico` con método `cargarBateria()`  
  - Clase abstracta `Transporte` con método abstracto `mover()`  
- Implementa ambas en una clase concreta `AutobusElectrico`.

---

## 🗝️ Conceptos Clave

- **Herencia** → reutilizar código y extender clases existentes  
- **Sobrescritura de métodos** → redefinir comportamiento de la clase base  
- **Modificadores de acceso** → controlar visibilidad (`private`, `protected`, `public`)  
- **Interfaces** → contratos que definen métodos y propiedades  
- **Clases abstractas** → definir métodos obligatorios para las subclases  
- **Abstracción** → ocultar la implementación interna mientras se expone comportamiento común  
- **Herencia múltiple indirecta** → combinar comportamientos vía interfaces  


