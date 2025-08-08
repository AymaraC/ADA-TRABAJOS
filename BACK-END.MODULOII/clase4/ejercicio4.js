/*Ejercicio 4: ¿Existe tu perfil? Consigna: Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json existe.
Si no existe, crea uno nuevo con un perfil básico. 
Pista: Usa fs.existsSync para verificar la existencia del archivo*/

const fs = require ('fs')

if(fs.existsSync('perfil.json')){
    console.log ("Tu perfil ya existe.")
} else {
    const perfilBasico = {
        nombre: "Julieta",
        edad : 20,
        cuidadFavorita: "Buenos Aires"
    
    }
    //Sino existe un perfil le pedimos que cree uno.
    fs.writeFile('perfil.json', JSON.stringify(perfilBasico, null, 2),(err)=> {
        if(err){
            console.log("No se pudo crear el perfil básico.",err)
        } else{
            console.log ("Perfil básico creado.")
        }
    }
    )
}





