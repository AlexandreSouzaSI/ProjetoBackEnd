const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/', require('./route/produtosRoute'));
app.use('/', require('./route/usuariosRoute'));


app.listen(3000);