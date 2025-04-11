// Requiere el módulo express
const express = require('express');

// Crea una instancia de Express
const app = express();

// Define el puerto en el que se va a ejecutar el servidor
const port = process.env.PORT || 3000;

// Configura una ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Express!');
});

app.get('/clientes', (req, res) => {
    const clientes = [
        { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@email.com' },
        { id: 2, nombre: 'Ana Gómez', email: 'ana.gomez@email.com' },
        { id: 3, nombre: 'Carlos López', email: 'carlos.lopez@email.com' }
    ];
    res.json(clientes);
});

app.get('/productos', (req, res) => {
    const productos = [
        { id: 1, nombre: 'Camiseta', precio: 20 },
        { id: 2, nombre: 'Pantalón', precio: 40 },
        { id: 3, nombre: 'Zapatos', precio: 60 }
    ];
    res.json(productos);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});