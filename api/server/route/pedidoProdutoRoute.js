const express = require('express');
const router = express.Router();
const pedidoProdutoService = require('../service/pedidoProdutoService');



router.get('/pedidoproduto', async function (req, res) {
    const posts = await pedidoProdutoService.getPedidoProduto();
    res.json(posts);
});

router.post('/pedidoproduto/inserir', async function (req, res) {
    const post = req.body;
    console.log(post)
    const newPost = await pedidoProdutoService.savePost(post)
    res.status(201).json(newPost);
});

router.delete('/pedidoproduto/delete/:id_pedido_usuario', async function (req, res) {
    await pedidoProdutoService.deletePost(req.params.id_pedido_usuario);
    res.status(204).end();
});

router.delete('/pedidoproduto/delete/:id_produto', async function (req, res) {
    await pedidoProdutoService.deletePost(req.params.id_produto);
    res.status(204).end();
});

router.put('/pedidoproduto/alterar/:id_pedido_usuario', async function (req, res) {
    const post = req.body;
	await pedidoProdutoService.updatePost(req.params.id_pedido_usuario, post);
	res.status(204).end();
});

module.exports = router;