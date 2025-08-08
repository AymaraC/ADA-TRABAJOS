/*Consigna:
Nunca está de más guardar una copia de seguridad. Escribe un programa que copie el contenido de metas.json en 
un archivo llamado respaldo_metas.json.
Pista: Usa el método fs.copyFile para copiar archivos de manera sencilla.*/

const fs = require ('fs');

fs.copyFile('metas.json', 'respaldo_metas.json',(err) => {      //primer parametro es la ruta que deseamos copiar y 
// el segundo el nombre que le vamos a dar si es que se encuentra en la misma carpeta.
    if(err){
        console.error('❌ Error. No se pudo copiar el archivo.', err)
    } else {
        console.log('✅ Archivo copiado correctamente.')
    }
});





















