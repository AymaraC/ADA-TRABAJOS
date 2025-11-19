# 🧠 Clase 8 — Abstracción, Herencia, Encapsulamiento y Polimorfismo en TypeScript

Este documento reúne todas las actividades trabajadas en clase, organizadas por tema: Abstracción, Herencia, Encapsulamiento y Polimorfismo.
Cada ejercicio está pensado para practicar conceptos fundamentales de la Programación Orientada a Objetos en TypeScript.

## 🟦 Actividades de Abstracción
### Ejercicio 1: Sistema de Transporte Público

Diseña un sistema combinando interfaces y clases abstractas.

Clase abstracta Transporte con método abstracto mover().

* Interfaces:

    * Electrico → método cargarBateria()

    * Combustible → método llenarTanque()

Clases:

* AutobusElectrico: extiende Transporte e implementa Electrico.

* Taxi: extiende Transporte e implementa Combustible.

------------------

### Ejercicio 2: Sistema de Gestión de Cursos

* Clase abstracta Persona.

* Clases concretas:

    * Estudiante

    * Profesor

* Clase Curso que contenga estudiantes y un profesor.

----------------

### Ejercicio 3: Sistema de Gestión de Compras

* Clase abstracta Producto.

* Clases concretas:

    * Electronico

    * Alimento

* Clase OrdenCompra que almacene múltiples productos.

### Ejercicio 4: Sistema de Gestión de Biblioteca

* Clase abstracta Publicacion

* Clases concretas: Libro, Revista

* Clase Biblioteca para gestionar préstamos


## 🟩 Actividades de Herencia

### Ejercicio 1: Herencia Múltiple Indirecta

* Clase Negocio con método protegido operar()

* Clase Consultoria que sobrescribe operar()

### Ejercicio 2: Sistema de Reserva de Hotel

* Clase Cliente: nombre, numeroHabitacion, método reservar()

* Derivadas:

    * ClientePremium

    * ClienteCorporativo

* Interfaz Beneficios

    * Premium → spa + desayuno

    * Corporativo → salas + descuentos

----------------------

### Ejercicio 3: Sistema de Tienda en Línea

* Clase base Producto

    * Derivadas:

        * Electronico

        * Ropa

* Interfaz Envio

    * Envío para electrónicos → 10% del precio
-----------------

### Ejercicio 4: Sistema de Gestión de Empleados

* Clase base Empleado

    * Derivadas:

        * EmpleadoTiempoCompleto

        * EmpleadoMedioTiempo

* Interfaz BeneficiosLaborales (solo tiempo completo)

------------------------------
### Ejercicio 5: Sistema de Gestión de Vehículos

* Clase base Vehiculo

    * Derivadas:

        * Automovil

        * Moto

* Interfaz Mantenimiento implementada distinto en cada clase

## 🟨 Actividades de Encapsulamiento

### Ejercicio 1: Bodega

* Propiedades privadas: nombre, direccion, inventario

* Métodos para agregar, eliminar y listar productos

* Validación: no permitir cantidades negativas

----------------------

### Ejercicio 2: Empleado

* Privado: nombre, salario, departamento

* Métodos:

    * Cambiar salario (no negativo)

    * Mostrar información

------------------
### Ejercicio 3: Playlist

* Privado: nombre, canciones

* Métodos:

    * Agregar canción (no vacía)

    * Eliminar si existe

    * Listar canciones
-----------------------

### Ejercicio 4: Taller de Reparaciones

* Privado: nombre, dirección, servicios, calificaciones

* Validaciones:

    * Precio no negativo

    * Calificaciones entre 1 y 5

    * Métodos para gestionar servicios y calcular promedio

## 🟧 Actividades de Polimorfismo

### Ejercicio 1: Instrumentos Musicales

* Clase abstracta InstrumentoMusical

    * Método tocar() sobrecargado

* Clases: Guitarra, Piano

------------------------

### Ejercicio 2: Empleados (Polimorfismo Complejo)

* Clase abstracta Empleado

* Derivadas:

    * EmpleadoPorHora

    * EmpleadoFijo

---------------------------

### Ejercicio 3: Cuenta Bancaria

* Clase CuentaBancaria (saldo protegido)

    * Métodos depositar/retirar

* Clase CuentaAhorros agrega interés

---------------------------

### Ejercicio 4: Clientes con Cuentas Bancarias

* Clase Cliente

* ClienteVIP sin comisiones

    * Ambos asociados a CuentaBancaria

