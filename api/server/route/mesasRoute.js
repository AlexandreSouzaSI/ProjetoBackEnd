const express = require('express');
const router = express.Router();
const mesasService = require('../service/mesasService');



router.get('/mesas', async function (req, res) {
    const posts = await mesasService.getMesas();
    res.json(posts);
});

router.post('/mesa/inserir', async function (req, res) {
    const post = req.body ;
    console.log(post);
    const newPost = await mesasService.savePost(post)
    res.status(201).json(newPost);
});

router.delete('/mesa/delete/:id_mesa', async function (req, res) {
    await mesasService.deletePost(req.params.id_mesa);
    res.status(204).end();
});

router.put('/mesa/alterar/:id_mesa', async function (req, res) {
    const post = req.body;
	await mesasService.updatePost(req.params.id_mesa, post);
	res.status(204).json(post);
});

module.exports = router;