const express = require('express');
const router = express.Router();
const usuariosService = require('../service/usuariosService');
const crypto = require('crypto')

router.get('/usuario', async function (req, res) {
    const posts = await usuariosService.getUsuario();
    res.json(posts);
});

router.post('/usuario/inserir', async function (req, res) {
    const post = req.body;
    const hashAd = crypto
            .createHash("sha256")
            .update(req.body.senha)
            .digest("hex");
    const newPost = usuariosService.saveUsuario(post, post.senha = hashAd);
    console.log(post);
    res.status(201).json(newPost);
    });

router.delete('/usuario/delete/:id_usuario_cadastrado', async function (req, res) {
    const post = req.body;
    await usuariosService.deleteUsuario(post, req.params.id_usuario_cadastrado);
    res.status(204).json(post);
});

router.put('/usuario/alterar/:id_usuario_cadastrado', async function (req, res) {
    const post = req.body;
	await usuariosService.updateUsuario(req.params.id_usuario_cadastrado, post);
	res.status(204).end();
});

module.exports = router;