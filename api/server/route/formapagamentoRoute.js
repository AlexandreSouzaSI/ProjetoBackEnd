const express = require('express');
const router = express.Router();
const formaPagamentoService = require('../service/formaPagamentoService');



router.get('/formapagamento', async function (req, res) {
    const posts = await formaPagamentoService.getFormapagamento();
    res.json(posts);
});

router.post('/formapagamento/inserir', async function (req, res) {
    const post = req.body;
    console.log(post)
    const newPost = await formaPagamentoService.saveFormapagamento(post)
    res.status(201).json(newPost);
});

router.delete('/formapagamento/delete/:id_forma_pagamento', async function (req, res) {
    await formaPagamentoService.deleteFormapagamento(req.params.id_forma_pagamento);
    res.status(204).end();
});

router.put('/formapagamento/alterar/:id_forma_pagamento', async function (req, res) {
    const post = req.body;
	await formaPagamentoService.updateFormapagamento(req.params.id_forma_pagamento, post);
	res.status(204).end();
});

module.exports = router;