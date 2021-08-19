const pedidousuarioData = require('../data/pedidousuarioData');

exports.getPedidoUsuario = function () {
    return pedidousuarioData.getPedidoUsuario();
};

exports.savePost = function (post) {
    return pedidousuarioData.savePost(post);
};

exports.deletePost = function (id_pedido_usuario) {
    return pedidousuarioData.deletePost(id_pedido_usuario);
};

exports.updatePost = function (id_usuario_cadastrado, id_forma_pagamento, id_mesa, post, id_pedido_usuario) {
	return pedidousuarioData.updatePost(id_usuario_cadastrado, id_forma_pagamento, id_mesa, post, id_pedido_usuario);
};