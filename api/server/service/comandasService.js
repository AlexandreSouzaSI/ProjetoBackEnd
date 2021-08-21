const comandasData = require('../data/comandasData');

exports.getComanda = function () {
    return comandasData.getComanda();
};

exports.saveComanda = function (post) {
    return comandasData.saveComanda(post);
};

exports.deleteComanda = function (id_comanda) {
    return comandasData.deleteComanda(id_comanda);
};

exports.updateComanda = function (id_usuario_cadastrado, id_forma_pagamento, id_mesa, post, id_comanda) {
	return comandasData.updateComanda(id_usuario_cadastrado, id_forma_pagamento, id_mesa, post, id_comanda);
};