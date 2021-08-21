const express = require('express');
const router = express.Router();
const itensComandaService = require('../service/itensComandaService');



router.get('/itenscomanda', async function (req, res) {
    const posts = await itensComandaService.getItensComanda();
    res.json(posts);
});

router.post('/itenscomanda/inserir', async function (req, res) {
    const post = req.body;
    console.log(post)
    const newPost = await itensComandaService.saveItensComanda(post)
    res.status(201).json(newPost);
});

router.delete('/itenscomanda/delete/:id_comanda', async function (req, res) {
    await itensComandaService.deleteItensComanda(req.params.id_comanda);
    res.status(204).end();
});

router.delete('/itenscomanda/delete/:id_produto', async function (req, res) {
    await itensComandaService.deleteItensComanda(req.params.id_produto);
    res.status(204).end();
});

router.put('/itenscomanda/alterar/:id_comanda', async function (req, res) {
    const post = req.body;
	await itensComandaService.updateItensComanda(req.params.id_comanda, post);
	res.status(204).end();
});

module.exports = router;