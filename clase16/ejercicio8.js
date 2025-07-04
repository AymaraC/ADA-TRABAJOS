/*Ejercicio 8: Busca un nombre específico 
Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos saber 
si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo.*/

let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana']

function contiene(lista, nombre){

    if(lista.includes(nombre)){
        return "El nombre " + nombre + " se encuentra en la lista."
    }else{
        return "El nombre no se encuentra en la lista."
    }
}

console.log(contiene(nombres, "Laura"));
