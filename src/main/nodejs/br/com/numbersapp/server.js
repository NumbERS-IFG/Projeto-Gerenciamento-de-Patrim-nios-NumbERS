const app = require('./app.js');

const port = process.env.PORT || 3000;

//FAZER ESCUTAR A PORTA 3000
app.listen(port, () => {
    console.log(`Servidor inicializado no endereço http://localhost:${port}`);
})