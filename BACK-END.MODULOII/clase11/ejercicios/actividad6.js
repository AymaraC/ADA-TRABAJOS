/*Crea un script que permita al usuario agregar elementos a una lista de compras. El usuario debe poder agregar 
tantos elementos como desee y luego ver la lista completa.*/

const readlineSync = require('readline-sync');

const listaDeCompras = [];
let usuario;

do {
    
   usuario = readlineSync.question('Ingrese el producto (para finalizar escriba fin): \n')

    if(usuario.toLowerCase().trim() !== 'fin'){
        listaDeCompras.push(usuario)

    } else {

    }

} while(usuario.toLowerCase().trim() !== 'fin')

console.log('\nLista de compras: \n');
listaDeCompras.forEach(compra => {
    console.log(compra);
    
});























