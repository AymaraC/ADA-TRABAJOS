/*En este ejercicio, trabajaremos con una lista de modelos de autos. Implementa una función llamada 
ultimaAparicionModeloAuto(modelo) que encuentre y muestre la última posición en la lista donde aparece el modelo 
específico de auto dado por modelo. 
Datos Iniciales: 
✔ Utiliza un array llamado modelosAutos que contiene varios modelos de 
autos, algunos repetidos para demostrar la funcionalidad. 
Funcionalidad: 
✔ Implementa la función ultimaAparicionModeloAuto(modelo), que toma 
modelo como parámetro (un string). 
✔ Debes recorrer el array de manera manual para encontrar la última 
aparición del modelo. 
✔ Si el modelo se encuentra en el array, la función debe imprimir por 
consola la posición (índice + 1) en la que aparece (considerando que la 
numeración es de 1 a N). 
✔ Si el modelo no está en el array, debe imprimir un mensaje indicando que 
el modelo no está presente.*/

let modelosAutos = [
    "corolla", "etios", "207", "fun", "fox", "t-cross", "etios",
    "cronos", "gol", "kwid", "eco sport", "corolla", "jeep", "308",
    "208", "207", "eco sport", "fun", "sandero", "fiorino", "t-cross"
]
for (let i = 0; i < modelosAutos.length; i++) {         //Es para ver las posiciones verdaderas del array.
  console.log(i + " → " + modelosAutos[i]);
}

function ultimaAparicionModeloAuto (modelo){
    for (i = modelosAutos.length - 1; i >= 0 ; i--){    //Restar 1 es necesario para que el índice inicial sea el último elemento válido del array. Retrocede de a uno hasta que llegue a 0.
        if (modelosAutos[i].toLowerCase() === modelo.toLowerCase()){
            console.log ("Última aparición en la posición: " + (i+1)) //Se le suma uno porque empieza a contar desde el 0
            return;
        }
}
        console.log ("El modelo no se encuentra en la lista.");
}


ultimaAparicionModeloAuto ("corolla")
ultimaAparicionModeloAuto ("eco sport")
ultimaAparicionModeloAuto ("GOL")
ultimaAparicionModeloAuto  ("ferrari")

