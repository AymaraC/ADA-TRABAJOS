import { Router } from "express";
const product = Router();

const products = [{id: 1, name: 'Mouse'}, {id: 2, name: 'Silla Gamer'}, {id: 3, name: 'Teclado'}];

product.get('/', (req, res) => {res.json(products)});

product.get('/:id', (req, res) => {
    const {id} = req.params;
    const findProduct = products.find(p => p.id === Number(id))  // Lo convertimos a Number porque params es de tipo string y no se puede comparar con un tipo number;

    if(!findProduct) {
        res.status(404).json({message: `Producto con ID ${id} no encontrado.`})
        return;
    };

    res.status(200).json(findProduct)

});

export default product;





