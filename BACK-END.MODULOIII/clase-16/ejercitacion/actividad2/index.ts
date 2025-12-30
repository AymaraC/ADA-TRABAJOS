import express from "express";
import path from "path";
import fs, { read, readFileSync } from "fs";
import { file } from "zod";

const PORT = 3000;

// EJERCICIO 2
/*1. Crea un arreglo inicial de productos con id y name. Ejemplo: { id: 1, name: “Notebook”}
2. Implementa dos endpoints:
• GET /products: Devuelve la lista de productos.
• POST /products: Permite agregar un producto enviando id y name en el body.
3. Asegúrate de manejar errores si faltan datos.*/

interface Product {
    id: number,
    name: string
}

const app = express();   // Inicializamos express para después poder usar sus funcionalidades

app.use(express.json());  // Inicializamos el json para que pueda entender la request

const filePath = path.join(__dirname, './products.json')

function readDataBase() : Product[] {
    if(!fs.existsSync(filePath)){
        return[]
    }

    const data = readFileSync(filePath, 'utf-8');
    return JSON.parse(data)
}


app.get('/products', (req, res) => {
    const products = readDataBase();
    return res.status(200).json(products)
});

app.post('/products', (req, res) => {
    const {id, name} = req.body;
    if(!id || !name) {
        return res.status(400).json({
            message: 'Faltan campos obligatorios.'
        })
    }

    const products = readDataBase();
    const newProduct = {id, name};
    products.push(newProduct);
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
    return res.status(201).json({
        message: 'Producto agregado con éxito.', product: newProduct
    });
});

/*EJERCICIO 4
Implementa dos endpoints adicionales para el CRUD de productos:
o PATCH /products/:id: Permite actualizar el name de un producto.
o DELETE /products/:id: Elimina un producto por id. Pistas:
• Usa las estructuras y lógica del ejercicio anterior como referencia.
• Cambia el arreglo y los campos para adaptarlo a productos.*/

app.patch('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const {name} = req.body;
    if(!name) return res.status(400).json({message: `Falta el dato obligatorio: 'name'`})

    if(isNaN(id)) return res.status(400).json({message: 'El id debe ser un número válido.'})

    const products = readDataBase();

    const findProduct = products.find(p => p.id === id);
    if(!findProduct) {
        return res.status(404).json({message: 'El id proporcionado no se encuentra en nuestra base de datos.'});
    }

    findProduct.name = name;
    fs.writeFileSync(filePath, JSON.stringify(products,null, 2));
    return res.status(200).json({
        message: 'Producto actualizado correctamente.', product: findProduct});
});

app.delete('/product/:id', (req, res) => {
    const id = Number(req.params.id);

    if(isNaN(id)) return res.status(400).json({
    message: 'El id debe ser un número válido.'
});

const products = readDataBase();
const findIndex = products.findIndex(item => item.id === id);
if(findIndex === -1) {
    return res.status(404).json({
        message: 'El id proporcionado no se encuentra en nuestra base de datos.'
    }) 
} else {
    const productDelete = products[findIndex]         // Guardamos el usuario a eliminar
        products.splice(findIndex, 1);     // Le pasamos el indice inicial y la cantidad a eliminar desde ese índice. En este caso es uno solo porque solo queremos eliminar a ese usuario.
        fs.writeFileSync(filePath, JSON.stringify(products, null, 2))
        return res.status(200).json({
            message: 'Producto eliminado con éxito', product: productDelete
        })
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});









