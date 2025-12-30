/* 1. Crea un esquema con Zod para validar los datos de una tarea.
2. Los datos de la tarea deben incluir:
o title de tipo string (obligatorio).
o completed de tipo boolean (opcional, por defecto debe ser false).
3. Valida los datos enviados en un endpoint POST antes de agregarlos a un arreglo temporal de tareas. Pistas:
• Usa z.object() para definir el esquema.
• Utiliza .default() para establecer un valor por defecto para completed.*/
import { z } from "zod";
import fs, { existsSync, readFileSync } from 'fs';
import path from "path";
import express from 'express';

const PORT = 3000;
const app = express();
app.use(express.json());

interface Task {
    id:number,
    task: string,
    completed?: boolean
};

// Definimos el esquema
const taskSchema = z.object({
    task: z.string(),
    completed: z.boolean().optional().default(false)
});

const filePath = path.join(__dirname, './tasks.json');

function readDataBase() : Task[] {
    if(!existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

app.get('/', (req, res) => {
    const allTasks = readDataBase();
    return res.status(200).json(allTasks);
});

app.post('/task', (req,res) => {
    try{
    const isValid = taskSchema.safeParse(req.body);
    if(!isValid.success) return res.status(400).json(isValid.error)

    const newTask: Task = {         // Si todo está bien, creo el objeto con la nueva tarea y el id que se le asigna.
      id: Date.now(),
      ...isValid.data
    };    const tasks = readDataBase(); 
    tasks.push(newTask);          

    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    res.status(201).json({
        message: 'Tarea agregada con éxito ',
        tarea: newTask
    });



} catch(e) {
    res.status(500).json({ error: 'Error interno del servidor', e });
}

});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});







