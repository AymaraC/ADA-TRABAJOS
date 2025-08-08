/*Ejercicio 7: “La Floreria”
Escribe una función "gestionarFloreria" que realice las siguientes tareas
con una lista predefinida de nombres de flores:
1. Quite los espacios en blanco alrededor de cada flor.
2. Verifique si existe la flor "Margarita" y, si está presente, agregue
"Azucena" al final de la lista.
3. Reemplace todas las flores "Orquídea" por "Clavel".
4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue
"Girasol" al inicio de la lista.
Devuelva una cadena de flores en orden alfabético separadas por puntos.*/

let entrada = "Rosa, Tulipán, Orquídea, Lirio, Margarita";

function gestionarFloreria(lista) {
  
  let listaLimpia = lista.split(',').map(flor => flor.trim());
  console.log(listaLimpia)

  
  if (listaLimpia.includes("Margarita")) {
    listaLimpia.push("Azucena");
  }
  console.log(listaLimpia)

 
  listaLimpia = listaLimpia.map(a=>a.replace("Orquídea","Clavel"));
  console.log(listaLimpia)

 
  if (!listaLimpia.includes("Girasol")) {
    listaLimpia.unshift("Girasol");
  }
  console.log(listaLimpia)

  
  listaLimpia.sort();

  
  listaLimpia = listaLimpia.join('.')

  
  console.log(listaLimpia);
}


gestionarFloreria(entrada);
