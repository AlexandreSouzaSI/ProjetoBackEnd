const formaPagamentoData = require('../data/formapagamentoData')

exports.getFormapagamento = function () {
    return formaPagamentoData.getFormapagamento();
};

exports.saveFormapagamento = function (post) {
    return formaPagamentoData.saveFormapagamento(post);
};

exports.deleteFormapagamento = function (post, id_forma_pagamento) {
    return formaPagamentoData.deleteFormapagamento(post, id_forma_pagamento);
};

exports.updateFormapagamento = function (id_forma_pagamento, post) {
	return formaPagamentoData.updateFormapagamento(id_forma_pagamento, post);
};