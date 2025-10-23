/*Ejercicio 9: Funciones con retorno void y manipulación de objetos
Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y encendido (booleano). 
Define una función encenderCoche que acepte el objeto coche y cambie el valor de encendido a true. 
Muestra el estado del coche en la consola antes y después de llamar a la función.*/

const coche : {marca: string, modelo:string, encendido:boolean} = {
    marca: 'Toyota',
    modelo: 'Etios',
    encendido: false,
};

console.log('El coche antes de llamar a la función:', JSON.stringify(coche,null,2));

function encenderCoche(coche: {marca:string,modelo:string,encendido:boolean}): void {
    coche.encendido = true;         //Modifica la propiedad del objeto pero no devuelve nada. Void no devuelve nada pero tiene acceso al objeto por lo que puede cambiarlo.
}

encenderCoche(coche);
console.log('\nEl coche luego de llamar a la función: ',JSON.stringify(coche,null,2));


