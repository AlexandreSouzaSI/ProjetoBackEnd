const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/', require('./route/produtosRoute'));
app.use('/', require('./route/usuariosRoute'));
app.use('/', require('./route/mesasRoute'));
app.use('/', require('./route/formaPagamentoRoute'));
app.use('/', require('./route/comandasRoute'));
app.use('/', require('./route/itensComandaRoute'));
app.use('/', require('./route/relatoriosRoute'));


app.listen(3000);