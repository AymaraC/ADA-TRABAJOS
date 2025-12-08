import express from 'express';
import userRouter from './routes/userRoutes.js';

// Crear una instancia de express
const app = express();

// Middleware para parsear JSON
app.use(express.json());
app.use('/users', userRouter)

export default app;







