/*Ejercicio 7: Tipos literales
Usa un tipo literal para declarar una variable que solo acepte uno de los valores: "Lunes", "Martes", "Miércoles". 
Intenta asignar otros valores y observa el error en TypeScript.*/

let dia : 'Lunes' | 'Martes' | 'Miercoles' = 'Miercoles'

console.log(`Hoy es ${dia}`);


/*TSError: ⨯ Unable to compile TypeScript:
ejercicio7.ts:5:5 - error TS2322: Type '"Jueves"' is not assignable to type '"Lunes" | "Martes" | "Miercoles"'.
let dia : 'Lunes' | 'Martes' | 'Miercoles' = 'Jueves'*/


