const express = require('express');
const router = express.Router();
const produtosService = require('../service/produtosService');



router.get('/produto', async function (req, res) {
    const posts = await produtosService.getProduto();
    res.json(posts);
});

router.post('/produto/inserir', async function (req, res) {
    const post = req.body ;
    console.log(post);
    const newPost = await produtosService.saveProduto(post)
    res.status(201).json(newPost);
});

router.delete('/produto/delete/:id_produto', async function (req, res) {
    await produtosService.deleteProduto(req.params.id_produto);
    res.status(204).end();
});

router.put('/produto/alterar/:id_produto', async function (req, res) {
    const post = req.body;
	await produtosService.updateProduto(req.params.id_produto, post);
	res.status(204).json(post);
});

module.exports = router;