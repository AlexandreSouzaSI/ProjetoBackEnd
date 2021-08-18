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
    const newPost = await postsService.savePost(post)
    res.status(201).json(newPost);
});

router.delete('/produtos/delete/:id', async function (req, res) {
    await postsService.deletePost(req.params.id);
    res.status(204).end();
});

router.put('/produtos/alterar/:id', async function (req, res) {
    const post = req.body;
	await postsService.updatePost(req.params.id, post);
	res.status(204).end();
});

module.exports = router;