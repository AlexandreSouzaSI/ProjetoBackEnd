const express = require('express');
const router = express.Router();
const usuariosService = require('../service/usuariosService');


router.get('/usuario', async function (req, res) {
    const posts = await usuariosService.getUsuario();
    res.json(posts);
});

router.post('/usuario/inserir', async function (req, res) {
    const post = req.body;
    console.log(post)
    const newPost = await usuariosService.saveUsuario(post)
    res.status(201).json(newPost);
});

router.delete('/usuario/delete/:id_usuario_cadastrado', async function (req, res) {
    await usuariosService.deleteUsuario(req.params.id_usuario_cadastrado);
    res.status(204).end();
});

router.put('/usuario/alterar/:id_usuario_cadastrado', async function (req, res) {
    const post = req.body;
	await usuariosService.updateUsuario(req.params.id_usuario_cadastrado, post);
	res.status(204).end();
});

module.exports = router;