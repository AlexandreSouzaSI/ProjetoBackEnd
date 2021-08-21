const express = require('express');
const router = express.Router();
const comandasService = require('../service/comandasService');



router.get('/comanda', async function (req, res) {
    const posts = await comandasService.getComanda();
    res.json(posts);
});

router.post('/comanda/inserir', async function (req, res) {
    const post = req.body;
    console.log(post)
    const newPost = await comandasService.saveComanda(post)
    res.status(201).json(newPost);
});

router.delete('/comanda/delete/:id_comanda', async function (req, res) {
    await comandasService.deleteComanda(req.params.id_comanda);
    res.status(204).end();
});

router.put('/comanda/alterar/:id_comanda', async function (req, res) {
    const post = req.body;
	await comandasService.updateComanda(req.params.id_comanda, post);
	res.status(204).end();
});

module.exports = router;