/*Ejercicio 8: Funciones con diferentes tipos de retorno
Consigna: Crea una función llamada calcularArea que acepte el tipo de figura ("circulo" o "rectangulo") y luego acepte los
parámetros necesarios para cada tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La función debe
retornar el área de la figura. Usa tipos específicos para cada caso.*/

function calcularArea(tipo: string, radio?: number, largo?: number,ancho?: number){

    if(tipo === 'circulo'){  
        return Math.PI * radio! * radio!;

    } else if(tipo === 'rectangulo'){   
        return largo! * ancho!  //Con el ! le indicamos a TS que no es undefined
    }}

console.log(`El área de un circulo es:`,calcularArea('circulo', 2));
console.log(`El área de un rectangulo es:`, calcularArea('rectangulo', undefined, 5, 10)); //Le ponemos undefined porque el parametro que esta despues del tipo es radio y no lo necesitamos en este caso.
















