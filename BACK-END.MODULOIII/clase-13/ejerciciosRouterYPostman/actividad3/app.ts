/*Ejercicio 3: Crear el Archivo app.ts y Configurar el Servidor. Descripción:
1. Crea el archivo app.ts que configurará el servidor Express y los routers.
2. En el archivo app.ts, importa los routers creados en los ejercicios anteriores y conecta el servidor.
3. Haz que el servidor escuche en el puerto 3000.*/

import express from "express";
import userRouter from "../actividad1/routes/userRouters";
import product from "../actividad2/routes/products";
import user from "../actividad2/routes/users";

const app = express(); 
app.use(express.json());

app.use('/users1', userRouter);         // Usuarios de la actividad 1

app.use('/products2', product);        // Productos de la actividad 2
app.use('/users2' , user);             // Usuarios de la actividad 2

app.listen(3000, () => {
    console.log('Servidor escuchando en: http://localhost:3000');
    console.log('Servidor escuchando en: http://localhost:3000/users1');
    console.log('Servidor escuchando en: http://localhost:3000/products2');
    console.log('Servidor escuchando en: http://localhost:3000/users2/1') // Output: Leonel que el id 1 de users
    console.log('Servidor escuchando en: http://localhost:3000/users2/5');   // Output: error porque no hay un id 5
});











