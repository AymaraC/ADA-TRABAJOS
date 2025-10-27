/*Actividad 4: Usar aserciones de tipo
Declara una variable de tipo any y usa una aserción para tratarla como string, accediendo a la propiedad .length.*/

let ciudadFavorita : any = 'Mi cuidad favorita es Río de Janeiro';

let longitudString : number = (ciudadFavorita as string).length     //Con el as le estamos diciendo que el tipo es string
console.log(`Longitud del string: ${longitudString}`);


