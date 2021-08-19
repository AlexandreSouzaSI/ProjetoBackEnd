const express = require('express');
const router = express.Router();
const relatoriosService = require('../service/relatoriosService');



router.get('/pedidosgeral', async function (req, res) {
    const posts = await relatoriosService.getPedidosGeral();
    res.json(posts);
});

router.get('/pedidosbebidas', async function (req, res) {
    const posts = await relatoriosService.getPedidosBebidas();
    res.json(posts);
});

router.get('/totalapagar', async function (req, res) {
    const posts = await relatoriosService.getTotalApagar();
    res.json(posts);
});

router.get('/totaldodia', async function (req, res) {
    const posts = await relatoriosService.getTotalDoDia();
    res.json(posts);
});

router.get('/totaproduto', async function (req, res) {
    const posts = await relatoriosService.getTotalProduto();
    res.json(posts);
});

module.exports = router;