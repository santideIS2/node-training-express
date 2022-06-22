require('dotenv').config();
const express = require('express');

const app = express()
const port = process.env.PORT;

// Contenido estático
app.use(express.static('public'));

app.get('*', (req, res) => {
    // Cuando quieran acceder al inicio ocultamos el .html
    // Que también funciona al acceder por el header
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Example listening at http://localhost:${port}`)
});
