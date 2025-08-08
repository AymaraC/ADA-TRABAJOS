/*Ejercicio 3: Gestión Compleja de Arrays
A partir del siguiente array de productos, escriba la función
‘gestionarProductos’ que realice las siguientes tareas:
1. Añada un nuevo producto al array.
2. Elimine el último producto del array.
3. Encuentre el índice de un producto específico. En este punto
pueden usar forEach o investigar el método “findIndex()”
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
/Global_Objects/Array/findIndex
4. Verifique si existe un producto con precio mayor a 50. Para esto
investigar el método “.some()”
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Glo
bal_Objects/Array/some
5. Devuelva una cadena de nombres de productos separados por
comas.*/

let productos = [
    {nombre: "lavandina",precio : 20},
    {nombre: "termo",precio : 100},
    {nombre: "mate",precio : 40}
]

function gestionarProductos(lista,prod,buscar){
    lista.pop()
    console.log(lista)

    lista.push(prod)
    console.log(lista)

    let index = lista.findIndex(item => item.nombre === buscar);
    if (index !== -1) {
        console.log("El producto " + buscar + " está en la lista en el índice " + (index + 1) );
    } else {
        console.log("El producto " + buscar  + " NO está en la lista.");
    }

    if(lista.some(a => a.precio > 50)){
        console.log("Hay un producto con un precio mayor a 50")
    }else{
        console.log("No hay un producto con un precio mayor a 50")
    }
    

    let nombresProductos = lista.map(item => item.nombre).join(", ");
    console.log("Nombres de productos:", nombresProductos);
}

let mouse = {
    nombre: "mouse",
    precio : 50
}

gestionarProductos(productos,mouse,"termo")