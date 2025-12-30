import cors from "cors"
import express from "express";

const PORT = 3000;
const app = express();

// Permitimos que otras páginas web puedan vincularse
app.use(cors())

app.get('/data', (req,res) => {
    const info = {
        name: "Aymara",
        age: 27,
        class: "back-end"
    }

    return res.status(200).json({
        message: 'Info', student: info})
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`)
})

