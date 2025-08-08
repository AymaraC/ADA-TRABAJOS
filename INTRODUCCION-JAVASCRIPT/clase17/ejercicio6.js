/*Ejercicio 6: Autos y más autos…
Escribe una función "gestionarAutos" que realice las siguientes tareas con una lista predefinida de marcas de autos:
1. Quite los espacios en blanco alrededor de cada marca.
2. Verifique si existe la marca "Tesla".
3. Reemplace todas las marcas "Ford" por "BMW".
4. Encuentre el índice de la marca "Chevrolet".
5. Devuelva una cadena de marcas en orden alfabético separadas por
puntos. Utilizar “.sort()”*/

let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";

function gestionarAutos(lista,marca, marca2) {
  
  let listaLimpia = lista.split(',').map(marca => marca.trim());
  console.log(listaLimpia)

  if(listaLimpia.includes(marca)){
    console.log(marca + " Esta en la lista")
  }else{
    console.log(marca + " No esta en la lista")
  }

  listaLimpia = listaLimpia.map(a=>a.replace("Ford", "BMW"))
  console.log(listaLimpia)

  let index = listaLimpia.findIndex(item => item === marca2);
    if (index !== -1) {
        console.log("La marca " + marca2 + " está en la lista en el índice " + (index + 1) );
    } else {
        console.log("La marca " + marca2  + " NO está en la lista.");
    }

    console.log(listaLimpia.sort().join("."))
  
}

gestionarAutos(entrada, "Tesla", "Chevrolet");