import { Router } from "express";
const user = Router();

const users = [{id: 1, nombre: 'Leonel', email: 'leo@example.com'}, {id: 2, nombre: 'Paulo', email: 'paulo@example.com'}, {id: 3, nombre: 'Ronaldo',email: 'roni@example.com'}, {id: 4, nombre: 'Leandro',email: 'lea@example.com'}]

user.get('/', (req, res) => {res.json(users)});

user.get('/:id', (req, res) => {
    const { id } = req.params;
    const findUser = users.find(u => u.id === Number(id));

    if(!findUser) {
        res.status(404).json({message: `Usuario con ID ${id} no se encuentra en nuestra base de datos.`});
        return;
    }

    res.status(200).json(findUser)
});

export default user;



