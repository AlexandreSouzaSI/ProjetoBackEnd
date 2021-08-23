const express = require('express');
const router = express.Router();
const mesasService = require('../service/mesasService');



router.get('/mesa', async function (req, res) {
    const posts = await mesasService.getMesa();
    res.json(posts);
});

router.post('/mesa/inserir', async function (req, res) {
    const post = req.body ;
    console.log(post);
    const newPost = await mesasService.saveMesa(post)
    res.status(201).json(newPost);
});

router.delete('/mesa/delete/:id_mesa', async function (req, res) {
    const post = req.body ;
    await mesasService.deleteMesa(post, req.params.id_mesa);
    res.status(204).end();
});

router.put('/mesa/alterar/:id_mesa', async function (req, res) {
    const post = req.body;
	await mesasService.updateMesa(req.params.id_mesa, post);
	res.status(204).json(post);
});

module.exports = router;