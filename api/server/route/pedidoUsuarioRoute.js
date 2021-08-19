const express = require('express');
const router = express.Router();
const pedidoUsuarioService = require('../service/pedidoUsuarioService');



router.get('/pedidousuario', async function (req, res) {
    const posts = await pedidoUsuarioService.getPedidoUsuario();
    res.json(posts);
});

router.post('/pedidousuario/inserir', async function (req, res) {
    const post = req.body;
    console.log(post)
    const newPost = await pedidoUsuarioService.savePost(post)
    res.status(201).json(newPost);
});

router.delete('/pedidousuario/delete/:id_pedido_usuario', async function (req, res) {
    await pedidoUsuarioService.deletePost(req.params.id_pedido_usuario);
    res.status(204).end();
});

router.put('/pedidousuario/alterar/:id_pedido_usuario', async function (req, res) {
    const post = req.body;
	await pedidoUsuarioService.updatePost(req.params.id_pedido_usuario, post);
	res.status(204).end();
});

module.exports = router;