// Ejemplo básico con objeto
let alumna = {
    nombre: 'Lucia',
    edad: 22,
    curso: 'Programación'
};

for (let propiedad in alumna){
    console.log(`Clave: ${propiedad}, valor: ${alumna[propiedad as keyof typeof alumna]}`);
}

console.log('\n----------\n');


// Propiedad 'as keyof typeof alumna' -> con esto le decimos 
// al compilador que la variable 'propiedad' es una clave válida de las propiedades de objeto 'alumna'(nombre, edad y curso)

// Ejemplo con array
let lenguajes = ['JavaScript', 'Python', 'TypeScript']

for (let indice in lenguajes){
    console.log(`Indice: ${indice}, valor: ${lenguajes[indice]}`);    
};













