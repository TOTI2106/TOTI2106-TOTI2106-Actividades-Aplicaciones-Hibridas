const express = require('express');
const mongoose  = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const urldb = process.env.URI_DB;
const moongose = require('mongoose');
moongose.connect(urldb);
const db = mongoose.connection;
db.on('error', () => {console.error('Error de conexion')});
db.once('open', () => {console.log('Conexion con el DB')});

const PORT = 5000;
const app = express();

app.use('/', (request, response) => {
    response.send('<h1> API REST </h1>');
})

app.listen(PORT, () =>{
    console.log(`API Rest en el puerto ${PORT}`);
})
