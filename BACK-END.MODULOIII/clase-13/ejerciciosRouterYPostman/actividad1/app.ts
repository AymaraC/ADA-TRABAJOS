// Este archivo solo conecta 
import express from "express";  // Con esto podemos crear la app, utilizar los middlewares disponibles en express, rutas, etc
import userRouter  from "./routes/userRouters";

const app = express();      // Creamos la instancia de la aplicación Express, lo que vamos a usar para declarar middlewares y montar routers.

app.use(express.json());  // Convertimos el body en de la request en un objeto JS

app.use('/users', userRouter);  // Conectamos la app con el router. Indicamos que todas las rutas definidas dentro de userRouter van a tener la base /users.

app.listen(3000, () => {
    console.log('Servidor corriendo en: http://localhost:3000/users')
});



