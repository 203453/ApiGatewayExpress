import express from 'express';
let app = express();

app.get('/materias', (req, res, next) => {
    res.send([
        "Inteligencia Artificial",
        "Programación Móvil",
        "Minería de Datos"
    ])
});

app.listen(3000, () => {
    console.log('> Api de materias funcionando')
});