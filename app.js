const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>¡Hola desde Docker con Node.js!</h1>
        <p>Esta app está corriendo en un contenedor desde GitHub.</p>
        <style>
            body { font-family: Arial; text-align: center; margin: 50px; }
            h1 { color: #2c3e50; }
        </style>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
