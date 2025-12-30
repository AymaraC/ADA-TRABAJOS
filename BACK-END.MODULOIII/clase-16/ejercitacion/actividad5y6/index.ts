/*Descripción:
1. Crea un esquema con Zod para validar que los datos de un usuario incluyan un id numérico y un name de tipo string.
2. Valida los datos enviados en un endpoint POST antes de agregarlos al arreglo.
Pistas:
• Usa z.object() para definir el esquema de validación.
• Emplea .parse() o .safeParse() para validar los datos.*/

import express from "express";
import path from "path";
import fs from "fs";
import { z } from "zod";

const PORT = 3000;

interface Product {
  id: number;
  name: string;
}

const app = express();
app.use(express.json());

const filePath = path.join(__dirname, './products-zod.json'); // Archivo separado para este ejercicio

function readDataBase(): Product[] {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

// Esquema Zod, definimos un objeto con las propiedades especificas y sus reglas de validación. Si llega un string, un array, etc, nos va a dar un error
const productSchema = z.object({
id: z.number().int().positive(),   // Valida que el campo exista, que no sea undefined, que sea un número, que sea 1 o mayor a 1 y que no sea decimal.
  name: z.string().min(1, "El nombre no puede estar vacío")     // Con el .min le estamos diciendo que como mínimo debe tener un caracter.
});

// Endpoint GET
app.get('/products', (req, res) => {
  const products = readDataBase();
  return res.status(200).json(products);
});

// Endpoint POST con Zod
app.post('/products', (req, res) => {
  const result = productSchema.safeParse(req.body);   // Validamos que lo enviado por el cliente cumpla con el esquema, devuelve siempre true or false

  if (!result.success) {              // Si son invalidos, cortamos el programa
    return res.status(400).json({     // Reemplaza a los !name !id
      message: "Datos inválidos",
      errors: result.error.format()   // Arma un objeto legible con la información de por qué se cortó.
    });
  }

  const newProduct: Product = result.data;      // Si todo esta bien, arma un nuevo producto con el tipo Product que es la interfaz que debe cumplirse
  const products = readDataBase();
  products.push(newProduct);
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));

  return res.status(201).json({
    message: "Producto agregado con éxito",
    product: newProduct
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

/*Ejercicio 6: Validar productos con Zod
Descripción:
1. Define un esquema con Zod para validar que los datos de un
producto.
Cada producto debe tener:
• id: Número obligatorio.
• name: Cadena de texto obligatoria.
2. Valida los datos antes de agregarlos al arreglo en un endpoint
POST.
Pistas:
• Usa el esquema del ejercicio 5 como referencia, adaptándolo a
los productos.
• Responde con un error 400 en caso de datos inválidos. */

