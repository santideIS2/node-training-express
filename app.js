const express = require('express');
const app = express()


// Contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    // Cuando quieran acceder al inicio ocultamos el .html
    // Que también funciona al acceder por el header
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(8080)
