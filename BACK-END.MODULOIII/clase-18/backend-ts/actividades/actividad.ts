import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/hello',(req, res) => {
    res.json({
        message: 'Hola, mundo!'
    })
})

app.post('/hello', (req, res) => {
    const {name} = req.body;
    res.json({message: `Hola ${name}!`})
})

// EJERCICIO 2
app.get('/greet/:name', (req, res) => {
    const {name} = req.params;
    res.json({message: `Hola ${name}!`})
})

// EJERCICIO 3
app.post('/register',(req, res) => {
    const {userName, password} = req.body;
    if(!userName || !password) {
        res.status(400).json({error: 'Todos los campos son obligatorios.'})
    }
    res.json({message: 'Usuario registrado con éxito', user: {userName, password}})
})

// EJERCICIO 4
const users = [{
    id:1,
    name: "Ana",
    email: "ana@example.com"
}];

app.get('/users', (req,res)=> {
    res.json(users)
})

app.post('/users', (req,res)=>{
    const {id, name, email} = req.body;
    const newUser = {
        id,
        name,
        email
    }
    users.push(newUser);
    res.json(newUser)
})

// EJERCICIO 5
app.use((req, res) => {
    res.status(400).json({error: 'Ruta no encontrada.'})
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})