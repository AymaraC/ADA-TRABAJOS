/*Ejercicio 7: Función que modifica propiedades de un objeto
Consigna: Crea una función llamada aumentarSalario que acepte un objeto empleado con las propiedades nombre (string) y salario (number),
y un número que represente el porcentaje de aumento. La función debe aumentar el salario del empleado y devolver 
el nuevo salario. Muestra en la consola el resultado.*/

const empleado = {
    nombre: 'Francisco',
    salario: 1000
};
console.log(`Objeto antes del aumento de sueldo:${JSON.stringify(empleado, null, 2)}`);

function aumentarSalario(empleado: {nombre: string, salario: number}, aumento: number){
    empleado.salario = empleado.salario * (1 + aumento / 100);
    return empleado.salario //Modificamos la propiedad salario
}
const aumentoDeSueldo = aumentarSalario(empleado,10)    //Pasamos el objeto empleado para que sepa que hay que modificar y devolvemos solo el numero con el return
console.log(`\nCon el aumento del sueldo quedaría en: ${aumentoDeSueldo}\n`);
console.log(`Objeto modificado con el aumento de sueldo:${JSON.stringify(empleado, null, 2)}`);















