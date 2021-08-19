const express = require('express');
const router = express.Router();
const usuariosService = require('../service/usuariosService');



router.get('/usuarios', async function (req, res) {
    const posts = await usuariosService.getUsuarios();
    res.json(posts);
});

router.post('/usuarios/inserir', async function (req, res) {
    const post = req.body;
    console.log(post)
    const newPost = await usuariosService.savePost(post)
    res.status(201).json(newPost);
});

router.delete('/usuarios/delete/:id_usuario_cadastrado', async function (req, res) {
    await usuariosService.deletePost(req.params.id_usuario_cadastrado);
    res.status(204).end();
});

router.put('/usuarios/alterar/:id_usuario_cadastrado', async function (req, res) {
    const post = req.body;
	await usuariosService.updatePost(req.params.id_usuario_cadastrado, post);
	res.status(204).end();
});

module.exports = router;