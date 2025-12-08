/*Descripción:
1. Divide tu aplicación en routers separados para manejar las rutas de usuarios y productos.
2. Crea un router específico para manejar las rutas de productos y otro para las rutas de usuarios.
3. Utiliza los routers creados en el archivo principal app.ts para hacer la conexión con el servidor Express. Pistas:
• Usa app.use() para asignar los routers a las rutas correspondientes.
• No olvides configurar el servidor para que escuche en el puerto 3000.*/

import  product  from './routes/products';
import user from './routes/users';
import express from 'express';

const app = express(); 

app.use(express.json());

app.use('/products', product);

app.use('/users', user);

app.listen(3000, () => {
    console.log('🚀 Servidor corriendo en http://localhost:3000');
    console.log('📦 Servidor corriendo en: http://localhost:3000/products')
    console.log('👤 Servidor corriendo en: http://localhost:3000/users')

})













