/*Actividad 3: Exportación por Defecto
Crea un módulo llamado user.ts que contenga una función:
• createUser(name: string, age: number): devuelve un objeto con name y age.
Exporta la función como exportación por defecto. En main.ts, importa createUser, crea un usuario y muestra su información 
en la consola.*/

export default function createUser(name: string, age: number) : {name: string, age:number} { //acá utilizadomos el tipado explicito de retorno. TS sabe que está función siempre devolverá un objeto con esas propiedades
    return {name, age}
}



