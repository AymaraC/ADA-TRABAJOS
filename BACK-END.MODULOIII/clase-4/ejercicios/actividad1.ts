/*Actividad 1: Usar For...In para recorrer propiedades de un objeto
Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un bucle for...in para recorrer y mostrar cada 
propiedad y su valor*/

let persona = {
    nombre: 'María',
    edad: 30,
    ciudad: 'Londres'
};

for(let propiedad in persona){
    console.log(`-Propiedad: ${propiedad} -> Valor: ${persona[propiedad as keyof typeof persona]}`); //keyof typeof persona significa los nombres de las propiedades del objeto
};


// El bucle for...in recorre las propiedades (keys) de un objeto.
