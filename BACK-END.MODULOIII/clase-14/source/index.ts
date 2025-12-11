// Archivo principal, donde levantamos el servidor
import express, {Application, Request, Response, NextFunction} from 'express';
import router from "./routes/userRoutes";
import errorHandler from "./middlewares/err.middleware";

const PORT = 3000;

const app : Application = express();

app.use(express.json());

app.use(router);            // Utilizamos las rutas

// Middleware 404 (cuando ya sabemos que no coincidió ninguna ruta)
app.use((req: Request, res: Response) => {
    res.status(404).json({error: 'Endpoint no encontrado.'});
});

app.use(errorHandler);      // Por último el middleware por si hay algún error, lo usamos último porque Express lee de arriba hacia abajo.

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`)
});






