const express = require('express');
const router = express.Router();
const formapagamentoService = require('../service/formapagamentoService');



router.get('/formapagamento', async function (req, res) {
    const posts = await formapagamentoService.getFormapagamento();
    res.json(posts);
});

router.post('/formapagamento/inserir', async function (req, res) {
    const post = req.body;
    console.log(post)
    const newPost = await formapagamentoService.savePost(post)
    res.status(201).json(newPost);
});

router.delete('/formapagamento/delete/:id_forma_pagamento', async function (req, res) {
    await formapagamentoService.deletePost(req.params.id_forma_pagamento);
    res.status(204).end();
});

router.put('/formapagamento/alterar/:id_forma_pagamento', async function (req, res) {
    const post = req.body;
	await formapagamentoService.updatePost(req.params.id_forma_pagamento, post);
	res.status(204).end();
});

module.exports = router;