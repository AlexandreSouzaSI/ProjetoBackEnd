const formapagamentoData = require('../data/formapagamentoData')

exports.getFormapagamento = function () {
    return formapagamentoData.getFormapagamento();
};

exports.savePost = function (post) {
    return formapagamentoData.savePost(post);
};

exports.deletePost = function (id_forma_pagamento) {
    return formapagamentoData.deletePost(id_forma_pagamento);
};

exports.updatePost = function (id_forma_pagamento, post) {
	return formapagamentoData.updatePost(id_forma_pagamento, post);
};