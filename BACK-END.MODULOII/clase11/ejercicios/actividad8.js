/*Crea un script que genere una frase aleatoria a partir de arrays predefinidos de sujetos, verbos y complementos. 
Usa readline-sync para preguntar al usuario cuántas frases desea generar.*/

const readlineSync = require('readline-sync');

const sujetos = ['yo', 'el perro', 'mi amiga']
const verbos = ['come', 'salta', 'duerme']
const complementos = ['en el parque', 'fideos', 'rápido']

const usuario = parseInt(readlineSync.questionInt('Cuantas frases quiere generar? (Se puede hasta 3 frases): '));

for(let i = 0; i < usuario; i++){
    const sujeto = Math.floor(Math.random() * sujetos.length)
    const verbo = Math.floor(Math.random() * verbos.length)
    const complemento = Math.floor(Math.random() * complementos.length)

    console.log(`${sujetos[sujeto]} ${verbos[verbo]} ${complementos[complemento]}`); //Le paso como indice la variable creada para generar el aleatorio.
    
};




















