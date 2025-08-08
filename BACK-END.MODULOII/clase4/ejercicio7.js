/*Consigna:
Revisa tu lista de metas en el archivo metas.json. Busca si una meta específica, como “Viajar a Japón”, ya está incluida. 
Si no, agrégala.
Pista: Usa fs.readFile para leer el archivo y un método como find para buscar en la lista.*/

const fs = require ('fs');

const encontrarMeta = "Viajar a Japón"

fs.readFile('metas.json', 'utf-8', (err,data) => {      //data es el contenido dentro del archivo
    if (err){
        console.log("El archivo no se puede leer.", err)
        return;
      
    } 

        let metas = JSON.parse(data)        //convierte el string en un objeto real de JS
        const existe = metas.find(meta => meta === encontrarMeta) //ya con el nombre del array creado podemos usar el find.


    if(!existe){
        metas.push(encontrarMeta)
        fs.writeFile('metas.json', JSON.stringify(metas,null,2), 'utf-8', (err) => {
            if(err){
                console.log('Hubo un error al cargar el archivo.', err)
                return;
            } 
                console.log(`✔️  ${encontrarMeta} fue agregada con éxito.`)
            })
            } else {
        console.log(`"${encontrarMeta}" ya está en la lista.`);
    }
        
        })










