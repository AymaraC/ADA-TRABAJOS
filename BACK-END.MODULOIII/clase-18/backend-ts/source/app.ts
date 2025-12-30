import express from "express";
import userRouter from "./routes/userRoutes";

// Instancia de aplicación en Express
const app = express();

// Middleware para parsear JSON (ya viene instalado en express)
app.use(express.json());

// Configracion de rutas
app.use('users/', userRouter);

export default app;










