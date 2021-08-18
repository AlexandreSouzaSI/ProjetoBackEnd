const express = require('express');
const router = express.Router();
const produtosService = require('../service/produtosService');



router.get('/produtos', async function (req, res) {
    const posts = await produtosService.getProdutos();
    res.json(posts);
});

router.post('/produtos/inserir', async function (req, res) {
    const post = req.body ;
    console.log(post);
    const newPost = await produtosService.savePost(post)
    res.status(201).json(newPost);
});

router.delete('/produtos/delete/:id_produto', async function (req, res) {
    await produtosService.deletePost(req.params.id_produto);
    res.status(204).end();
});

router.put('/produtos/alterar/:id_produto', async function (req, res) {
    const post = req.body;
	await produtosService.updatePost(req.params.id_produto, post);
	res.status(204).json(post);
});

module.exports = router;