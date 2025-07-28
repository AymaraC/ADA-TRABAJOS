/*Escribe una función que reciba un objeto con platos y precios, y devuelva
los platos cuyo precio sea menor a $20.
Consigna:
• Usa un bucle for...in.
• Usa objetos y arrays.*/

function menuDelDia (menu){

    let platos = {
        "milanesa":20,
        "sushi": 50,
        "tortilla": 15,
        "ensalada": 5,
        "empanadas": 14
    }
    let platosBaratos = []; 
       
    for (let plato in platos){ //plato toma los valores de las comidas

        if(platos[plato] < 20){
            platosBaratos.push(plato)

        }
    }
    return platosBaratos;
}

console.log (`Los platos que tienen un valor menos a 20 son: ${menuDelDia()}`)



