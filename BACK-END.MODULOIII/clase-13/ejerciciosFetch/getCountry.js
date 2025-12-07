/*Ejercicio 3: Obtener Información de un País por Nombre 
1. Crea un archivo getCountry.js. 
2. Escribe una función que reciba el nombre de un país como parámetro, realice una solicitud a la API de REST Countries, 
y devuelva el nombre, capital y región del país. 
3. Muestra estos datos en la consola. Pistas: 
• La URL para buscar un país es: https://restcountries.com/v3.1/name/argentina 
• La respuesta contiene un arreglo; accede al primer objeto con [0] para extraer la información.*/

async function getCountry(name) {
    try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const data = await response.json();
    const country = data[0]
    const nombre = country.name.common
    const capital = country.capital
    const region = country.region

    console.log(`-Nombre: ${nombre}\n-Capital: ${capital}\n-Region: ${region}`);
    
}
 catch(err) {
    console.error(err)
}

}

getCountry('Argentina')
